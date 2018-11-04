import React, { Component, createRef } from 'react'
import styled from 'styled-components'
import { observer, inject } from 'mobx-react';

const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0, 0.3);
	z-index: 1000;
`

const ModalContent = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	right: auto;
	bottom: auto;
	border: none;
	background: rgb(255, 255, 255);
	overflow: auto;
	border-radius: 4px;
	outline: none;
	padding: 0px;
	margin-right: -50%;
	transform: translate(-50%, -50%);
	box-shadow: rgba(76, 76, 76, 0.3) 0px 0px 26px 0px;
`

@inject('store') @observer class Modal extends Component {
	content = createRef();
	componentDidMount() {
		document.addEventListener('click', this.handleOverlayClick)
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleOverlayClick)
	}

	handleOverlayClick = e => {
		const content = this.content.current;
		const modalIsOpen = this.props.store.modalIsOpen;
		if (modalIsOpen && !content.contains(e.target)) {
			this.closeModal()
		}
	}

	closeModal = () => {
		this.props.store.toggleModal(false)
	}


	render() {
		const {modalIsOpen} = this.props.store;
		return (
			modalIsOpen ?
				<ModalOverlay>
					<ModalContent ref={this.content}>
						Modal
					</ModalContent>
				</ModalOverlay> : null
		)
	}
}

export default Modal;