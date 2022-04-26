import images from '../assets/images.js'
import colors from '../assets/colors.js'
import { useState,useEffect,useRef } from 'react'

const promoData =[
    {   id:1,
        product: 'Doosan Lynx 2100 Series',
        description: '5 Axis With Milling',
        content: `The newly-designed Lynx 2100/2600 Y-axis horizontal turning centers may be small in stature, but they more than make up for it when it's time to produce. These machines are born with a chip on their shoulders.`,
        productImg: images.lynx2100,
        productBg: images.lynx2100bg
    },
    {
        id:2,
        product: 'Harvey Tool',
        description: 'Undercut Endmills',
        content: `Improve surface finish in all of your undercutting, deburring, and multi-axis machining applications with our Undercutting End Mills.`,
        productImg: images.harveytool,
        productBg: images.harveytoolbg
    },
    {
        id: 3,
        product: 'Iscar Turning Technology',
        description: 'Iscar SumoTurn',
        content: `The SUMOTURN inserts are coated with ISCAR's innovative SUMOTEC grades. In order to assist customers in selecting the correct grade for their applications, ISCAR developed new coating processes for the SUMOTEC grades featuring different colors for easy identification.`,
        productImg: images.iscartool,
        productBg: images.iscartoolbg
    }
]


const PromoCarousel = ()=>{
    const Promos = () => {
        const promoImgStyle ={
            width:600,
            height: 600,
            zIndex: 1,
            margin: '1rem 3rem auto auto'
        }
        const promoTextStyle={
            zIndex: 1,
            color: 'white',
            marginLeft: '3rem'
        }
        const colorLayerStyle={
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundColor: colors.doosanLightBlue,
            opacity: .8,
            zIndex:-1
        }
        const titleStyle ={
            lineHeight: '4.4rem',
            fontSize: '6rem',
            marginBottom: 0,
            fontWeight: '800'
        }
        const descriptionStyle={
            marginTop: '1rem',
            fontSize: '2.5rem'
        }
        const contentStyle={
            fontSize: '2rem',
            fontWeight: 300
        }

        // USE STATE HOOK TO SET INDEX FOR CAROUSEL
        let [activeIdx,setactiveIdx] = useState(0)
        // const idx = useRef()

        // https://overreacted.io/making-setinterval-declarative-with-react-hooks/#just-show-me-the-code
        // create a useinterval hook from these instructions

        return promoData.map(data=> {
            const containerStyle={
                position: 'relative',
                // left: '50%',
                display: 'flex',
                background: ` #ffffff2a url(${data.productBg}) no-repeat center`,
                backgroundSize: 'cover',
                flexDirection: 'row',
                backgroundColor: 'white',
                height: 700
            }
            return(
            <div key={data.id}  
            style={containerStyle}>
                <div style={promoTextStyle}>
                    <div style={colorLayerStyle}></div>
                    <h1 style={titleStyle}>{data.product.toUpperCase()}</h1>
                    <h3 style={descriptionStyle}>{data.description.toUpperCase()}</h3>
                    <p style={contentStyle}>{data.content}</p>
                </div>
                <img style={promoImgStyle} src={data.productImg} alt="" />
            </div>
            )
        })
    }
    
    return(
        <div>
            <Promos/>
        </div>
    )
}

export default PromoCarousel