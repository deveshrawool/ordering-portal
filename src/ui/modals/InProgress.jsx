import { Modal, Stack } from '@mantine/core'
import React from 'react'

function InProgress(props) {
  return (
    <Modal
    opened={props.opened}
    closeOnClickOutside={true}
    closeOnEscape={true}
    onClose={props.onClose}
    centered
    >
        <Stack align='center'>
        <p>Feature in progress. Will be available soon</p>
        <button onClick={props.onClose}>OK</button>
        </Stack>
    </Modal>
  )
}

export default InProgress