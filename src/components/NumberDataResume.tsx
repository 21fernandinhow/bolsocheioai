export default function NumberDataResume (props: {title: string, value: number}) {
    return (
        <section className="item-box number-data-resume">
            <h3>{props.title}</h3>
            <span>{props.value}</span>
        </section>
    )
}