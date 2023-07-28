// components/DraggableHOC.js
import React, { DragEvent, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startDrag, endDrag } from '../../../Redux/Actions/DragableAction/dragableAction';
import { AppDispatch, RootState } from '../../../Store/store';
import { getImageIDRequest } from '../../../Redux/Actions/ImageUpload/imageUpload';

const DraggableHOC = ({ children }: any) => {
    const [files, setFiles] = useState<File[]>([]); // Changed the type of `files` to File[].

    const acceptedTypes = [
        'image/png',
        'image/jpg',
        'image/jpeg',
        'image/gif',
        'image/svg+xml',
        'image/webp'
    ];

    const dispatch = useDispatch<AppDispatch>();
    const { isDragging } = useSelector((state: RootState) => state.draggableReducer);
// const {} = useSelector((state: RootState)=>state.imageUploadedReducer)
    const handleDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        dispatch(endDrag());
        const imageFiles: File[] = Array.from(event.dataTransfer.files);

        const filteredFiles = imageFiles.filter((file) =>
            acceptedTypes.includes(file.type)
        );

        if (filteredFiles.length > 0) {
            setFiles([...files, ...filteredFiles]);
        } else {
            alert('None of the selected files are of the supported types');
        }
    };

    useEffect(() => {
        let formData = new FormData();
        files.forEach((item) => {
            formData.append('files', item);
        });
        if(files.length>0){
            dispatch(getImageIDRequest(formData))
        }
       
        console.log(files, 'files');
    }, [files]);

    const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        if (!isDragging) {
            dispatch(startDrag());
        }
    };

    return (
        <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
            {children}
        </div>
    );
};

export default DraggableHOC;
