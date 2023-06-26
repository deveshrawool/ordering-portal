import { Modal, Stack } from '@mantine/core'
import React from 'react'

function Popup(props) {

  return (
    <Modal
    opened={props.opened}
    closeOnClickOutside={true}
    closeOnEscape={true}
    onClose={props.onClose}
    centered
    >
        <Stack align='center'>
        <p>{props.message}</p>
        <button onClick={props.onClose}>OK</button>
        </Stack>
    </Modal>
  )
}

export default Popup