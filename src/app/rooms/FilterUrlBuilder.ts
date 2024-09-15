// Using the builder pattern, create a URL from filter options

import { FilterOptions } from "../filter-options/options";

export class FilterUrlBuilder {
    private url: string;

    constructor(private readonly baseUrl: string) {
        this.url = baseUrl;
    }

    getUrl(): string {
        return this.url;
    }

    addRoomTypeFilter(roomTypeOptions: FilterOptions[]): FilterUrlBuilder {
        // Select only the room types with selected = true
        const selectedRoomTypes = roomTypeOptions
            .filter(option => option.selected)
            .map(option => option.name.toUpperCase())
            .join(',');
        if (selectedRoomTypes) {
            this.url += `&types=${selectedRoomTypes}`;
        }
        return this;
    }

    addPriceRangeFilter(priceRangeOptions: FilterOptions[]): FilterUrlBuilder {
        // Check that there is only one price range selected, if that is not the case, throw an error
        const selectedPriceRanges = priceRangeOptions
            .filter(option => option.selected)
            .map(option => option.name)

        if (selectedPriceRanges.length > 1) {
            throw new Error('Only one price range can be selected');
        }

        if (selectedPriceRanges[0] === 'Under 25€') {
            this.url += `&maxPrice=25`;
        }

        if (selectedPriceRanges[0] === '25€ - 50€') {
            this.url += `&minPrice=25&maxPrice=50`;
        }

        if (selectedPriceRanges[0] === '50€ - 100€') {
            this.url += `&minPrice=50&maxPrice=100`;
        }

        if (selectedPriceRanges[0] === '100€ - 200€') {
            this.url += `&minPrice=100&maxPrice=200`;
        }

        if (selectedPriceRanges[0] === 'Over 200€') {
            this.url += `&minPrice=200`;
        }

        return this;

    }

    addRatingFilter(ratingOptions: FilterOptions[]): FilterUrlBuilder {
        // Check that there is only one rating selected, if that is not the case, throw an error
        const selectedRatings = ratingOptions
            .filter(option => option.selected)
            .map(option => option.name)

        if (selectedRatings.length > 1) {
            throw new Error('Only one rating can be selected');
        }

        if (selectedRatings[0] === '1 Star') {
            this.url += `&minRating=1&maxRating=1.9`;
        }

        if (selectedRatings[0] === '2 Stars') {
            this.url += `&minRating=2&maxRating=2.9`;
        }

        if (selectedRatings[0] === '3 Stars') {
            this.url += `&minRating=3&maxRating=3.9`;
        }

        if (selectedRatings[0] === '4 Stars') {
            this.url += `&minRating=4&maxRating=4.9`;
        }

        if (selectedRatings[0] === '5 Stars') {
            this.url += `&minRating=5`;
        }

        return this;
    }

}
