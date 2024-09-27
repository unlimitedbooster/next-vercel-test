export default function ProductPage({ params }: { params: { id: string } }) {
    console.log(params.id)
    return (
        <div >
            <h1>Material Details</h1>
        </div>
    );
}