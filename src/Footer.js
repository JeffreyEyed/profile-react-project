import twitter from './images/twitter.png'
import facebook from './images/facebook.png'
import discord from './images/discord.png'
import github from './images/github.png'

function Footer() {
    return (
        <div className='footerDiv'>
            <img src={twitter} className='twitter' alt="twitter" />
            <img src={facebook} className='facebook' alt="facebook" />
            <img src={discord} className='discord' alt="discord" />
            <img src={github} className='github' alt="github" />
        </div>
    )
}
export default Footer