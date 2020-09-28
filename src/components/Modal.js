import React from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import moment from "moment";
import { FaTimes } from "react-icons/fa";

function ModalContainer({ isOpenModal, closeModal, date }) {
  const momentDate = moment(date);

  return (
    <Modal
      isOpen={isOpenModal}
      style={{
        overlay: {
          backgroundColor: "rgba(39, 40, 41, 0.8)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          backgroundColor: "#fffff",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          padding: "0",
        },
      }}
      ariaHideApp={false}
    >
      <div className="popap">
        <div className="popap__wraper">
          <div className="popap__wrap">
            <h5 className="popap__title">Month</h5>
            <input defaultValue={momentDate.format("MMMM")} disabled />
          </div>
          <div className="popap__wrap">
            <h5 className="popap__title">Day</h5>
            <input defaultValue={momentDate.format("Do dddd")} disabled />
          </div>
        </div>
        <button onClick={closeModal} className="popap__btn">
          <FaTimes />
        </button>
      </div>
    </Modal>
  );
}

const mapStateToProps = (state) => {
  return {
    isOpenModal: state.modalIsOpen,
    date: state.date,
  };
};

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => {
    dispatch({
      type: "CLOSE",
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
