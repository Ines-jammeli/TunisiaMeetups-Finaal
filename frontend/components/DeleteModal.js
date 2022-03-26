import React from "react";
import { doc, deleteDoc, increment, updateDoc } from "firebase/firestore";
import Router from "next/router";
import { auth, db } from "../firebase/clientApp";

import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

const Example=(props)=> {
console.log(props.id)
  const [modalOpen, setModalOpen] = React.useState(false);

  async function deletePost() {
await deleteDoc(doc(db, "posts", `${props.id}`));
    Router.reload(window.location.pathname);
  }
  return (
    <>
      <a
        className="ti-close text-grey-900 btn-round-md bg-greylight font-xss"
        onClick={() => setModalOpen(!modalOpen)}
      ></a>

      <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className=" modal-header">
          <h5 className=" modal-title" id="exampleModalLabel">
            Delete Post
          </h5>
          <button
            aria-label="Close"
            className=" close"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <ModalBody>Are you sure ?</ModalBody>
        <ModalFooter>
          <Button color="primary" type="button"
onClick={deletePost}
          >
Confirm Delete
          </Button>
          <Button
            color="secondary"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default Example;
