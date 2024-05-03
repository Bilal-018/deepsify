import React, { useState, useEffect } from 'react';
import { FiUploadCloud } from "react-icons/fi";
import { ReactComponent as Img } from "../assets/icons/jpg.svg"
import { ReactComponent as Pdf } from "../assets/icons/pdf.svg"
import { ReactComponent as Tick } from "../assets/icons/tick.svg"

interface FileWithProgress {
    file: File;
    progress: number;
}

export const FileUpload = () => {
    const [selectedFiles, setSelectedFiles] = useState<FileWithProgress[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const maxSize = 50 * 1024 * 1024;
            const newFiles: FileWithProgress[] = Array.from(files).filter(file => file.size <= maxSize).map(file => ({ file, progress: 0 }));
            setSelectedFiles(prevFiles => [...prevFiles, ...newFiles]);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedFiles(prevFiles => prevFiles.map(fileWithProgress => {
                if (fileWithProgress.progress < 100) {
                    const increment = Math.floor(Math.random() * 10);
                    const newProgress = fileWithProgress.progress + increment;
                    return { ...fileWithProgress, progress: newProgress > 100 ? 100 : newProgress };
                } else {
                    return fileWithProgress;
                }
            }));
        }, 100);
        return () => clearInterval(interval);
    }, []);

    const getIcon = (fileType: string) => {
        if (fileType === 'application/pdf') {
            return <Pdf />;
        } else if (fileType.startsWith('image/')) {
            return <Img />;
        } else {
            return <Pdf />;
        }
    };

    return (
        <>
            <div className="flex flex-col items-center justify-end w-full h-[70vh]">
                <label className="h-4/6 w-11/12 lg:w-3/4 laptop:w-1/2 p-4 border-2 border-dashed border-[#0080DC] rounded-3xl cursor-pointer">
                    <input
                        type="file"
                        multiple
                        className="w-full h-full text-sm text-gray-500 hidden"
                        onChange={handleFileChange}
                        accept=".pdf,.jpg"
                    />

                    <div className='text-center flex flex-col items-center justify-between h-full w-full'>
                        <div className='flex flex-col items-center gap-y-2'>
                            <FiUploadCloud size={window.innerWidth < 768 ? 50 : 200} />
                            <p className='text-xl md:text-4xl font-medium'>Drag & Drop</p>
                            <p className='text-base md:text-2xl text-gray-500'>or select files from device</p>
                        </div>

                        <p className='text-sm md:text-xl text-gray-500'>max. 50MB</p>
                    </div>
                </label>
            </div>

            <div className='flex flex-col w-full items-center py-5 md:py-10'>
                {selectedFiles.map((fileWithProgress, index) => (
                    <div key={index} className="mt-2 md:mt-4 w-11/12 lg:w-3/4 laptop::w-1/2">
                        <div className="w-full bg-[#303030] rounded-xl px-3 py-4 md:px-6 md:py-8 text-sm md:text-lg relative">
                            <div className="flex justify-between items-center">
                                <div className='flex items-center gap-x-2 md:gap-x-5'>
                                    {getIcon(fileWithProgress.file.type)}
                                    <p>{fileWithProgress.file.name}</p>
                                </div>
                                {fileWithProgress.progress === 100 && <Tick />}
                            </div>
                            <div className="bg-[#0080DC] opacity-20 py-4 md:py-8 rounded-2xl absolute top-0 bottom-0 left-0 right-0" style={{ width: `${fileWithProgress.progress}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
