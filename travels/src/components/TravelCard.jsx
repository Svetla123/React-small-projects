import React from "react";

export default function TravelCard(props) {
    return (
        <section className="card--container">
            <div className="card--image-container">
                <img src={props.imageUrl} className="card--image" />
            </div>
            <div className="card--info">
                <div className="card--info-title">
                    <img
                        src="https://pngicon.ru/file/uploads/geometka.png"
                        width="20px"
                    />
                    <div className="card--location">{props.location}</div>
                    <div>
                        <a href={props.googleMapsUrl}>View on Google Maps</a>
                    </div>
                </div>
                <div className="card--main-title">{props.title}</div>
                <div className="card--dates">
                    {props.startDate} - {props.endDate}
                </div>
                <div className="card--description">{props.description}</div>
            </div>
        </section>
    );
}
