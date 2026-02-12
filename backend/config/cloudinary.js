import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import { promisify } from 'util';

const unlinkAsync = promisify(fs.unlink);

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localPath) => {
    try {
        if (!localPath) {
            return null;
        }

        const response = await cloudinary.uploader.upload(localPath, {
            resource_type: 'auto'
        });

        try {
            await unlinkAsync(localPath).catch(() => { });
        } catch { }
        return response;
    } catch (error) {
        try {
            await unlinkAsync(localPath).catch(() => { });
        } catch { }
        console.log("Cloudinary Upload Error : ", error);
        return null;
    }
}

export { cloudinary };
export default uploadOnCloudinary;