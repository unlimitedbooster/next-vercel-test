export default function ProductPage({ params }: { params: { id: string } }) {
    console.log(params.id)
    return (
        <div >
            <h1>Material Details {params.id}</h1>
        </div>
    );
}