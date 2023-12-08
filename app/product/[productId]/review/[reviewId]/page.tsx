import {notFound} from "next/navigation";

export default function ReviewDetail({params}: { params: { productId: string, reviewId: string } }) {
    if (parseInt(params.reviewId) > 1000) {
        notFound()
    }
    return (
        <div>
            Product nested id {params.productId} with review id {params.reviewId} routes
        </div>
    )
}