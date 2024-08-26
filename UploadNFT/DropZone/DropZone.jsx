// DropZone.js
import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import images from '../../img';
import Style from "./DropZone.module.css";
import { useDropzone } from 'react-dropzone';

const DropZone = ({ title, heading, subHeading, itemName, website, description, rayalties, fileSize, properties, category, uploadToIPFS, setImage, onSizeChange,NoOf }) => {
  const [file, setFile] = useState(null);
  const [size, setSize] = useState("");

  const onDrop = useCallback(async (acceptedFiles) => {
    if (acceptedFiles.length === 0) {
      console.log("No files accepted");
      return;
    }
    const selectedFile = acceptedFiles[0];
    const sizeInMB = (selectedFile.size / (1024 * 1024)).toFixed(2);

    setSize(sizeInMB);
    if (onSizeChange) {
      onSizeChange(sizeInMB); // Notify parent of the size change
    }

    const url = await uploadToIPFS(selectedFile);
    if (url) {
      setFile(url);
      setImage(url);
    }
    console.log(url);
  }, [uploadToIPFS, setImage, onSizeChange]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop,
    maxSize: 3000000, // 3 MB in bytes
    onDropRejected: (fileRejections) => {
      alert("File Rejected:", fileRejections);
    }
  });

  return (
    <div className={Style.DropZone}>
      <div className={Style.DropZone_box} {...getRootProps()}>
        <input {...getInputProps()} />
        <div className={Style.DropZone_box_input}>
          <h2>{heading}</h2>
          <div className={Style.DropZone_box_input_img}>
            <Image src={images.upload} alt="Dropzone" width={100} height={100} className={Style.DropZone_box_input_img_img} />
          </div>
          <div className={Style.DropZone_box_info}>
            <h4>{subHeading}</h4>
          </div>
        </div>
      </div>
      {file && (
        <aside className={Style.DropZone_box_aside}>
          <div className={Style.DropZone_box_aside_box}>
            <Image src={file} alt="nftimages" width={200} height={200} style={{ objectFit: 'contain' }} />
            <div className={Style.DropZone_box_aside_box_preview}>
              <div className={Style.DropZone_box_aside_box_preview_one}>
                <p><span>NFT Name: </span> <span className={Style.sp}>{itemName || "Fill Details Below"}</span></p>
                <p><span>Website: </span> <span className={Style.sp}>{website || "Fill Details Below"}</span></p>
              </div>
              <div className={Style.DropZone_box_aside_box_preview_two}>
                <p><span>Description:</span> <span className={Style.sp}>{description || "Fill Details Below"}</span></p>
              </div>
              <div className={Style.DropZone_box_aside_box_preview_three}>
                <p><span>Royalties:</span> <span className={Style.sp}>{rayalties || "Fill Details Below"}</span></p>
                <p><span>No Of Items:</span> <span className={Style.sp}>{NoOf || "Fill Details Below"}</span></p>

                <p><span>File Size:</span> <span className={Style.sp}>{size ? `${size} MB` : "Fill Details Below"}</span></p>
                <p><span>Properties:</span> <span className={Style.sp}>{properties || "Fill Details Below"}</span></p>
                <p><span>Category:</span> <span className={Style.sp}>{category || "Fill Details Below"}</span></p>
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default DropZone;
