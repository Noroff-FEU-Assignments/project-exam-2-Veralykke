import { useState, useEffect } from "react";
import { API } from "../../constants/api.js";
import HotelItem from "../hotels/HotelItem";
//import Heading from "../layout/Heading";


function HotelList() {
	const [hotels, setHotels] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	
	useEffect(function () {
		async function fetchData() {
			try {
				const response = await fetch(API);

				if (response.ok) {
					const json = await response.json();
					console.log(json);
					setHotels(json.data);
				} else {
					setError("An error occured");
				}
			} catch (error) {
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}
		fetchData();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if  (error) {
		return <div>ERROR: An error occured</div>;
	}

	return (
		<div className="hotels">
			{hotels.map(function (hotel) {
				const  { id, slug } = hotel;
				return <HotelItem key={id} id={id} slug={slug} />;
			})}
		</div>
	);
	
	}
	

export default HotelList;


