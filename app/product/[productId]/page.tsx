import {Metadata} from "next"

type Props = {
    params: {
        productId: string
    }
}
export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`iphone ${params.productId}`)
        }, 1000)
    })
    return {
        title: `Product ${title}`
    }
}
export default function ProductDetail({params}: Props) {
    return (
        <div>
            Product nested {params.productId} routes
        </div>
    )
}