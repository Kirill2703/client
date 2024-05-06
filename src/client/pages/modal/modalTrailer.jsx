import React, { useState } from "react";
import ButtonTrailer from "../trailer/button-trailer";
import Modal from "react-modal";
import Trailer from "../trailer/trailer";
import { CloseOutlined} from "@ant-design/icons";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  content: {
    position: "relative",
    border: "none",
    borderRadius: "8px",
    padding: "40px",
    background: "none",
    overflow: "hidden",
    width: "90%",
    height: "90%",
    maxWidth: "800px",
    maxHeight: "90%",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
    animation: "fadeIn 0.3s ease",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "0",
    fontSize: "24px",
    color: "#fff",
    zIndex: 1100,
  },
  description: {
    marginTop: "20px",
    color: "#fff",
    textAlign: "left",
  },
};

const ModalTrailer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

    return (
      <div>
        <ButtonTrailer onClick={showModal} />
        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleCancel}
          contentLabel="Movie Trailer Modal"
          style={customStyles}
        >
          <Trailer />
          <button onClick={handleCancel} style={customStyles.closeButton}>
            <CloseOutlined />
          </button>
        </Modal>
      </div>
    );
};

export default ModalTrailer;
