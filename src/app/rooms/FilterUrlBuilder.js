"use strict";
// Using the builder pattern, create a URL from filter options
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterUrlBuilder = void 0;
var FilterUrlBuilder = /** @class */ (function () {
    function FilterUrlBuilder(baseUrl) {
        this.baseUrl = baseUrl;
        this.url = baseUrl;
    }
    FilterUrlBuilder.prototype.getUrl = function () {
        return this.url;
    };
    FilterUrlBuilder.prototype.addRoomTypeFilter = function (roomTypeOptions) {
        // Select only the room types with selected = true
        var selectedRoomTypes = roomTypeOptions
            .filter(function (option) { return option.selected; })
            .map(function (option) { return option.name.toUpperCase(); })
            .join(',');
        if (selectedRoomTypes) {
            this.url += "&roomType=".concat(selectedRoomTypes);
        }
        return this;
    };
    FilterUrlBuilder.prototype.addPriceRangeFilter = function (priceRangeOptions) {
        // Check that there is only one price range selected, if that is not the case, throw an error
        var selectedPriceRanges = priceRangeOptions
            .filter(function (option) { return option.selected; })
            .map(function (option) { return option.name; });
        if (selectedPriceRanges.length > 1) {
            throw new Error('Only one price range can be selected');
        }
        if (selectedPriceRanges[0] === 'Under 25€') {
            this.url += "&minPrice=0&maxPrice=25";
        }
        if (selectedPriceRanges[0] === '25€ - 50€') {
            this.url += "&minPrice=25&maxPrice=50";
        }
        if (selectedPriceRanges[0] === '50€ - 100€') {
            this.url += "&minPrice=50&maxPrice=100";
        }
        if (selectedPriceRanges[0] === '100€ - 200€') {
            this.url += "&minPrice=100&maxPrice=200";
        }
        if (selectedPriceRanges[0] === 'Over 200€') {
            this.url += "&minPrice=200";
        }
        return this;
    };
    FilterUrlBuilder.prototype.addRatingFilter = function (ratingOptions) {
        // Check that there is only one rating selected, if that is not the case, throw an error
        var selectedRatings = ratingOptions
            .filter(function (option) { return option.selected; })
            .map(function (option) { return option.name; });
        if (selectedRatings.length > 1) {
            throw new Error('Only one rating can be selected');
        }
        if (selectedRatings[0] === '1 Star') {
            this.url += "&minRating=1&maxRating=1.9";
        }
        if (selectedRatings[0] === '2 Stars') {
            this.url += "&minRating=2&maxRating=2.9";
        }
        if (selectedRatings[0] === '3 Stars') {
            this.url += "&minRating=3&maxRating=3.9";
        }
        if (selectedRatings[0] === '4 Stars') {
            this.url += "&minRating=4&maxRating=4.9";
        }
        if (selectedRatings[0] === '5 Stars') {
            this.url += "&minRating=5";
        }
        return this;
    };
    return FilterUrlBuilder;
}());
exports.FilterUrlBuilder = FilterUrlBuilder;
