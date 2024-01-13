import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import { format } from "date-fns";
import { getSearchResult } from "@/utils/api";
import { SearchResultData } from "../types/app";
import ListingCard from "../components/ListingCard";

type SearchParams = {
  location: string;
  startDate: string;
  endDate: string;
  numOfGuests: string;
};

const SearchResult = async ({
  searchParams: { location, startDate, endDate, numOfGuests },
}: {
  searchParams: SearchParams;
}) => {
  let formateStartDate;
  let formateENdtDate;
  if (startDate && endDate) {
    formateStartDate = format(new Date(startDate), "dd MMMM yy");
    formateENdtDate = format(new Date(endDate), "dd MMMM yy");
  }

  const range = `${formateStartDate} - ${formateENdtDate}`;
  const filters = [
    "Cancellation Flexibility",
    "Type of Place",
    "Price",
    "Rooms and Beds",
    "More filters",
  ];

  const searchResultData: SearchResultData = await getSearchResult();

  return (
    <>
      <Header placeholder={`${location} | ${range} | ${numOfGuests} Guests`} />
      <main>
        <section className="pt-14">
          <div className="container ">
            <p className="text-xs">
              300+ Stays - {range} - for {numOfGuests} guests
            </p>
            <h1 className="text-3xl font-semibold mt-2 mb-6 ">
              Stays in {location}
            </h1>

            <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
              {filters.map((filter) => (
                <button key={filter} type="button" className="filter-btn">
                  {filter}
                </button>
              ))}
            </div>
         <div>
         {searchResultData.map((listing) => (
              <ListingCard
                key={listing.title}
                img={listing.img}
                title={listing.title}
                location={listing.location}
                description={listing.description}
                price={listing.price}
                total={listing.total}
                star={listing.star}
              />
            ))}
         </div>
         
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SearchResult;
