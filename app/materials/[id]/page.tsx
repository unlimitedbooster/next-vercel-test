export default function ProductPage({ params }: { params: { id: string } }) {
    const { id } = params;
    return (
        <div >
            <h1>Material Details {id}</h1>
        </div>
    );
}