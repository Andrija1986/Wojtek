import {BiCopyright} from 'react-icons/bi'
import {GiBasketballBasket} from 'react-icons/gi'
import {GiBasketballBall} from 'react-icons/gi'
import {GiBasketballJersey} from 'react-icons/gi'

const Footer = ({footerDate}) => {
  return (
    <footer>
        <span><BiCopyright /></span>
        <span><GiBasketballBasket /></span>
        <p>{footerDate.current} Andrija Petrovic</p>
        <span><GiBasketballBall /></span>
        <span><GiBasketballJersey /></span>
    </footer>
  )
}

export default Footer