import styled from '@emotion/styled'
import { Button, Divider, Stack } from '@mantine/core'
import React, { useContext, useMemo, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import Popup from '../../ui/modals/Popup'

const StyledStack = styled(Stack)`
    padding: 20px 10px;
`

const AddressLabelWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const StyledH3 = styled.h3`
    margin: 5px 0;
`
const InvoiceItemsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const InnvoiceItem = styled.div`
    color: #6e6e6e;
`

function CartTotal() {
    const{cartTotal,clearCart} = useContext(CartContext)
    const [showPopup,setShowPopup] = useState(false)
    const taxAmount = useMemo(()=>{
        return (cartTotal*9)/100
    },[cartTotal])
  return (
    <StyledStack>
        <Popup opened={showPopup} onClose={()=>setShowPopup(false)} message={'Order Placed Successfully!'} />
        <StyledH3>Purchase Order Number</StyledH3>
        <input value={Math.floor(1000000000 + Math.random() * 9000000000)} disabled={true}/>
        <AddressLabelWrapper>
            <StyledH3>Addresses</StyledH3>
            <div>View &#0062;</div>
        </AddressLabelWrapper>
        <p>{'123,Porvorim,Goa, 412356'}</p>
        <Divider my="sm" variant="dashed" />
        <InvoiceItemsWrapper>
            <InnvoiceItem>Item Total</InnvoiceItem>
            <InnvoiceItem>{cartTotal}</InnvoiceItem>
        </InvoiceItemsWrapper>
        <InvoiceItemsWrapper>
            <InnvoiceItem>{`SGST (9%)`}</InnvoiceItem>
            <InnvoiceItem>{taxAmount}</InnvoiceItem>
        </InvoiceItemsWrapper>
        <InvoiceItemsWrapper>
            <InnvoiceItem>{`CGST (9%)`}</InnvoiceItem>
            <InnvoiceItem>{taxAmount}</InnvoiceItem>
        </InvoiceItemsWrapper>
        <InvoiceItemsWrapper>
            <InnvoiceItem>{`IGST (9%)`}</InnvoiceItem>
            <InnvoiceItem>{taxAmount}</InnvoiceItem>
        </InvoiceItemsWrapper>
        <InvoiceItemsWrapper>
            <InnvoiceItem>{`Taxable Amount`}</InnvoiceItem>
            <InnvoiceItem>1000</InnvoiceItem>
        </InvoiceItemsWrapper>
        <Divider my="sm" />
        <InvoiceItemsWrapper>
            <InnvoiceItem>{`Order Total`}</InnvoiceItem>
            <InnvoiceItem>{cartTotal + 3 * taxAmount + 1000}</InnvoiceItem>
        </InvoiceItemsWrapper>
        <InvoiceItemsWrapper>
            <Button variant='outline' color='dark' onClick={clearCart} >Clear Cart</Button>
            <Button variant='filled' color='red' onClick={()=>setShowPopup(true)}>Place Order</Button>
        </InvoiceItemsWrapper>
    </StyledStack>
  )
}

export default CartTotal