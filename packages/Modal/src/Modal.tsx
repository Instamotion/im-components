import React from 'react';
import styled from 'styled-components';
import theme from '@im-ui/theme';

export interface ModalProps {
  className?: string;
  text?: string;
}

const ModalComponent: React.FC<ModalProps> = ({ className, text }) => (
  <div className={className}> {text} </div>
);

const Modal = styled(ModalComponent)`
  width: 50%;
  padding: 1rem;
  font-size: 2rem;
  background: ${theme.color.silver};
`;

export default Modal;
