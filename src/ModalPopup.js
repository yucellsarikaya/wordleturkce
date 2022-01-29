import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal/lib/components/Modal';
import { MainContext, useContext } from "./context"

export default function ModalPopup() {
    const { modalIsOpen, setIsOpen } = useContext(MainContext)

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="contentModal"
            >
                <div>
                    <div className='header'>
                        <div className='title'><strong>NASIL OYNANIR</strong></div>
                        <div className='close'>
                            <button onClick={closeModal}>
                                x
                            </button>
                        </div>
                    </div>
                    <div><p><strong>WORDLE</strong>'i 6 denemede bulun.</p></div>
                    <div><p>Her tahmin 5 harfli doğru bir kelime olmalıdır. Göndermek için enter'a basın.</p></div>
                    <div><p>Her tahminden sonra kutucukların renkleri tahmininizin yakınlığına göre değişecektir.</p></div>
                    <hr />
                    <div><strong><p>Örnekler</p></strong></div>
                    <div className='box green'>A</div>
                    <div className='box'>B</div>
                    <div className='box'>O</div>
                    <div className='box'>N</div>
                    <div className='box'>E</div>
                    <div><p><strong>A</strong> harfi kelimede var ve doğru yerde.</p></div>
                    <div className='box'>G</div>
                    <div className='box yellow'>İ</div>
                    <div className='box'>Z</div>
                    <div className='box'>E</div>
                    <div className='box'>M</div>
                    <div><p><strong>İ</strong> harfi kelimede var fakat yanlış yerde.</p></div>
                    <div className='box'>F</div>
                    <div className='box'>A</div>
                    <div className='box'>L</div>
                    <div className='box'>E</div>
                    <div className='box gray'>Z</div>
                    <div><p><strong>Z</strong>  harfi kelimede yok. </p></div>
                    <hr />
                    <div><strong>Her gün yeni bir WORDLE gelir!</strong></div>
                </div>

            </Modal>
        </div>
    );
}
