import images from '../assets/images.js'

const promoData =[
    {   id:1,
        product: 'Lynx 2100 Series',
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
        productbg: images.iscartoolbg
    }
]


const PromoCarousel = ()=>{
    const Promos = () => {
        const containerStyle={
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'white',
            height: 500
        }
        const promoImg ={
            width:500
        }
        const promoText={
        }

        return promoData.map(data=> {
            const containerStyle={
                display: 'flex',
                backgroundImage: data.productBg,
                // backgroundPosition: 'center',
                // background: 'fill',
                flexDirection: 'row',
                backgroundColor: 'white',
                height: 500
            }
            return(
            <div key={data.id} style={containerStyle}>
                <div style={promoText}>
                    <h1>{data.product.toUpperCase()}</h1>
                    <h3>{data.description.toUpperCase()}</h3>
                    <p>{data.content}</p>
                </div>
                <img style={promoImg} src={data.productImg} alt="" />
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