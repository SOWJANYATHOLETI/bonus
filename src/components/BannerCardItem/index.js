import './index.css'

const CardList = (props) => {
    const = {bannerList} = props
    const = {className,headerText,description} = bannerList
}
return (
    <li className={`${className} banner-card-container`}>
        <div>
            <h1 className="heading">{headerText}</h1>
            <p className="description">{description}</p>
            <button className="button">Show More</button>
        </div>
    </li>
)
export default CardList
