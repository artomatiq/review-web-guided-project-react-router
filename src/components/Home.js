import {useNavigate} from 'react-router-dom';

export default function Home() {

  const navigate = useNavigate()

  const routeToShop = () => {
    navigate('/items-list')
  }

  return (
    <div className='home-wrapper'>
      <img
        className='home-image'
        src='https://source.unsplash.com/F6-U5fGAOik'
        alt='store front'
      />
      <button onClick={routeToShop} className='md-button shop-button'>
        Shop now!
      </button>
    </div>
  )
}
