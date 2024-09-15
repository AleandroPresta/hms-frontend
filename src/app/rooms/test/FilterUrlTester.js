"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterUrlTester = void 0;
var console_1 = require("console");
var FilterUrlBuilder_1 = require("../FilterUrlBuilder");
var FilterUrlTester = /** @class */ (function () {
    function FilterUrlTester() {
        // Test the FilterUrlBuilder class
        this.baseUrl = 'http://test:port/api/version/etc';
    }
    FilterUrlTester.prototype.testFilterUrlBuilderRoomType1 = function () {
        var filterUrlBuilder = new FilterUrlBuilder_1.FilterUrlBuilder(this.baseUrl);
        var roomTypeOptions = [
            { name: 'Single', selected: true },
            { name: 'Double', selected: false },
            { name: 'King', selected: true },
            { name: 'Queen', selected: false },
            { name: 'Suite', selected: true },
        ];
        var url = filterUrlBuilder.addRoomTypeFilter(roomTypeOptions).getUrl();
        console.log(url);
        (0, console_1.assert)(url === 'http://test:port/api/version/etc&roomType=SINGLE,KING,SUITE');
    };
    FilterUrlTester.prototype.testFilterUrlBuilderRoomType2 = function () {
        var filterUrlBuilder = new FilterUrlBuilder_1.FilterUrlBuilder(this.baseUrl);
        var roomTypeOptions = [
            { name: 'Single', selected: false },
            { name: 'Double', selected: false },
            { name: 'King', selected: false },
            { name: 'Queen', selected: false },
            { name: 'Suite', selected: false },
        ];
        var url = filterUrlBuilder.addRoomTypeFilter(roomTypeOptions).getUrl();
        console.log(url);
        (0, console_1.assert)(url === 'http://test:port/api/version/etc');
    };
    FilterUrlTester.prototype.testFilterUrlBuilderPriceRange1 = function () {
        var filterUrlBuilder = new FilterUrlBuilder_1.FilterUrlBuilder(this.baseUrl);
        var priceRangeOptions = [
            { name: 'Under 25€', selected: false },
            { name: '25€ - 50€', selected: false },
            { name: '50€ - 100€', selected: false },
            { name: '100€ - 200€', selected: true },
            { name: 'Over 200€', selected: false },
        ];
        var url = filterUrlBuilder.addPriceRangeFilter(priceRangeOptions).getUrl();
        console.log(url);
        (0, console_1.assert)(url === 'http://test:port/api/version/etc&minPrice=100&maxPrice=200');
    };
    FilterUrlTester.prototype.testFilterUrlBuilderPriceRange2 = function () {
        var filterUrlBuilder = new FilterUrlBuilder_1.FilterUrlBuilder(this.baseUrl);
        var priceRangeOptions = [
            { name: 'Under 25€', selected: false },
            { name: '25€ - 50€', selected: false },
            { name: '50€ - 100€', selected: false },
            { name: '100€ - 200€', selected: false },
            { name: 'Over 200€', selected: true },
        ];
        var url = filterUrlBuilder.addPriceRangeFilter(priceRangeOptions).getUrl();
        console.log(url);
        (0, console_1.assert)(url === 'http://test:port/api/version/etc&minPrice=200');
    };
    FilterUrlTester.prototype.testFilterUrlBuilderPriceRange3 = function () {
        var filterUrlBuilder = new FilterUrlBuilder_1.FilterUrlBuilder(this.baseUrl);
        var priceRangeOptions = [
            { name: 'Under 25€', selected: false },
            { name: '25€ - 50€', selected: true },
            { name: '50€ - 100€', selected: false },
            { name: '100€ - 200€', selected: false },
            { name: 'Over 200€', selected: false },
        ];
        var url = filterUrlBuilder.addPriceRangeFilter(priceRangeOptions).getUrl();
        console.log(url);
        (0, console_1.assert)(url === 'http://test:port/api/version/etc&minPrice=25&maxPrice=50');
    };
    FilterUrlTester.prototype.testFilterUrlBuilderRoomTypePriceRange1 = function () {
        var filterUrlBuilder = new FilterUrlBuilder_1.FilterUrlBuilder(this.baseUrl);
        var roomTypeOptions = [
            { name: 'Single', selected: true },
            { name: 'Double', selected: false },
            { name: 'King', selected: true },
            { name: 'Queen', selected: false },
            { name: 'Suite', selected: true },
        ];
        var priceRangeOptions = [
            { name: 'Under 25€', selected: false },
            { name: '25€ - 50€', selected: true },
            { name: '50€ - 100€', selected: false },
            { name: '100€ - 200€', selected: false },
            { name: 'Over 200€', selected: false },
        ];
        var url = filterUrlBuilder.addRoomTypeFilter(roomTypeOptions).addPriceRangeFilter(priceRangeOptions).getUrl();
        console.log(url);
        (0, console_1.assert)(url === 'http://test:port/api/version/etc&roomType=SINGLE,KING,SUITE&minPrice=25&maxPrice=50');
    };
    FilterUrlTester.prototype.testFilterUrlBuilderRoomTypePriceRange2 = function () {
        var filterUrlBuilder = new FilterUrlBuilder_1.FilterUrlBuilder(this.baseUrl);
        var roomTypeOptions = [
            { name: 'Single', selected: false },
            { name: 'Double', selected: false },
            { name: 'King', selected: false },
            { name: 'Queen', selected: false },
            { name: 'Suite', selected: false },
        ];
        var priceRangeOptions = [
            { name: 'Under 25€', selected: false },
            { name: '25€ - 50€', selected: false },
            { name: '50€ - 100€', selected: false },
            { name: '100€ - 200€', selected: false },
            { name: 'Over 200€', selected: true },
        ];
        var url = filterUrlBuilder.addRoomTypeFilter(roomTypeOptions).addPriceRangeFilter(priceRangeOptions).getUrl();
        console.log(url);
        (0, console_1.assert)(url === 'http://test:port/api/version/etc&minPrice=200');
    };
    FilterUrlTester.prototype.testFilterUrlBuilderRoomTypePriceRange3 = function () {
        var filterUrlBuilder = new FilterUrlBuilder_1.FilterUrlBuilder(this.baseUrl);
        var roomTypeOptions = [
            { name: 'Single', selected: true },
            { name: 'Double', selected: false },
            { name: 'King', selected: true },
            { name: 'Queen', selected: false },
            { name: 'Suite', selected: true },
        ];
        var priceRangeOptions = [
            { name: 'Under 25€', selected: false },
            { name: '25€ - 50€', selected: false },
            { name: '50€ - 100€', selected: false },
            { name: '100€ - 200€', selected: true },
            { name: 'Over 200€', selected: false },
        ];
        var url = filterUrlBuilder.addRoomTypeFilter(roomTypeOptions).addPriceRangeFilter(priceRangeOptions).getUrl();
        console.log(url);
        (0, console_1.assert)(url === 'http://test:port/api/version/etc&roomType=SINGLE,KING,SUITE&minPrice=100&maxPrice=200');
    };
    FilterUrlTester.prototype.testFilterUrlBuilderRating1 = function () {
        var filterUrlBuilder = new FilterUrlBuilder_1.FilterUrlBuilder(this.baseUrl);
        var ratingOptions = [
            { name: '1 Star', selected: true },
            { name: '2 Stars', selected: false },
            { name: '3 Stars', selected: false },
            { name: '4 Stars', selected: false },
            { name: '5 Stars', selected: false },
        ];
        var url = filterUrlBuilder.addRatingFilter(ratingOptions).getUrl();
        console.log(url);
        (0, console_1.assert)(url === 'http://test:port/api/version/etc&minRating=1&maxRating=1.9');
    };
    FilterUrlTester.prototype.testFilterUrlBuilderRating2 = function () {
        var filterUrlBuilder = new FilterUrlBuilder_1.FilterUrlBuilder(this.baseUrl);
        var ratingOptions = [
            { name: '1 Star', selected: false },
            { name: '2 Stars', selected: false },
            { name: '3 Stars', selected: true },
            { name: '4 Stars', selected: false },
            { name: '5 Stars', selected: false },
        ];
        var url = filterUrlBuilder.addRatingFilter(ratingOptions).getUrl();
        console.log(url);
        (0, console_1.assert)(url === 'http://test:port/api/version/etc&minRating=3&maxRating=3.9');
    };
    FilterUrlTester.prototype.testFilterUrlBuilderRating3 = function () {
        var filterUrlBuilder = new FilterUrlBuilder_1.FilterUrlBuilder(this.baseUrl);
        var ratingOptions = [
            { name: '1 Star', selected: false },
            { name: '2 Stars', selected: false },
            { name: '3 Stars', selected: false },
            { name: '4 Stars', selected: false },
            { name: '5 Stars', selected: true },
        ];
        var url = filterUrlBuilder.addRatingFilter(ratingOptions).getUrl();
        console.log(url);
        (0, console_1.assert)(url === 'http://test:port/api/version/etc&minRating=5');
    };
    FilterUrlTester.prototype.testFilterUrlBuilderRoomTypeRating1 = function () {
        var filterUrlBuilder = new FilterUrlBuilder_1.FilterUrlBuilder(this.baseUrl);
        var roomTypeOptions = [
            { name: 'Single', selected: true },
            { name: 'Double', selected: false },
            { name: 'King', selected: true },
            { name: 'Queen', selected: false },
            { name: 'Suite', selected: true },
        ];
        var ratingOptions = [
            { name: '1 Star', selected: true },
            { name: '2 Stars', selected: false },
            { name: '3 Stars', selected: false },
            { name: '4 Stars', selected: false },
            { name: '5 Stars', selected: false },
        ];
        var url = filterUrlBuilder.addRoomTypeFilter(roomTypeOptions).addRatingFilter(ratingOptions).getUrl();
        console.log(url);
        (0, console_1.assert)(url === 'http://test:port/api/version/etc&roomType=SINGLE,KING,SUITE&minRating=1&maxRating=1.9');
    };
    FilterUrlTester.prototype.testFilterUrlBuilderRoomTypeRating2 = function () {
        var filterUrlBuilder = new FilterUrlBuilder_1.FilterUrlBuilder(this.baseUrl);
        var roomTypeOptions = [
            { name: 'Single', selected: false },
            { name: 'Double', selected: false },
            { name: 'King', selected: false },
            { name: 'Queen', selected: false },
            { name: 'Suite', selected: false },
        ];
        var ratingOptions = [
            { name: '1 Star', selected: false },
            { name: '2 Stars', selected: false },
            { name: '3 Stars', selected: true },
            { name: '4 Stars', selected: false },
            { name: '5 Stars', selected: false },
        ];
        var url = filterUrlBuilder.addRoomTypeFilter(roomTypeOptions).addRatingFilter(ratingOptions).getUrl();
        console.log(url);
        (0, console_1.assert)(url === 'http://test:port/api/version/etc&minRating=3&maxRating=3.9');
    };
    FilterUrlTester.prototype.testFilterUrlBuilderRoomTypeRating3 = function () {
        var filterUrlBuilder = new FilterUrlBuilder_1.FilterUrlBuilder(this.baseUrl);
        var roomTypeOptions = [
            { name: 'Single', selected: true },
            { name: 'Double', selected: false },
            { name: 'King', selected: true },
            { name: 'Queen', selected: false },
            { name: 'Suite', selected: true },
        ];
        var ratingOptions = [
            { name: '1 Star', selected: false },
            { name: '2 Stars', selected: false },
            { name: '3 Stars', selected: false },
            { name: '4 Stars', selected: false },
            { name: '5 Stars', selected: true },
        ];
        var url = filterUrlBuilder.addRoomTypeFilter(roomTypeOptions).addRatingFilter(ratingOptions).getUrl();
        console.log(url);
        (0, console_1.assert)(url === 'http://test:port/api/version/etc&roomType=SINGLE,KING,SUITE&minRating=5');
    };
    FilterUrlTester.prototype.testFilterUrlBuilderRoomTypePriceRangeRating1 = function () {
        var filterUrlBuilder = new FilterUrlBuilder_1.FilterUrlBuilder(this.baseUrl);
        var roomTypeOptions = [
            { name: 'Single', selected: true },
            { name: 'Double', selected: false },
            { name: 'King', selected: true },
            { name: 'Queen', selected: false },
            { name: 'Suite', selected: true },
        ];
        var priceRangeOptions = [
            { name: 'Under 25€', selected: false },
            { name: '25€ - 50€', selected: true },
            { name: '50€ - 100€', selected: false },
            { name: '100€ - 200€', selected: false },
            { name: 'Over 200€', selected: false },
        ];
        var ratingOptions = [
            { name: '1 Star', selected: true },
            { name: '2 Stars', selected: false },
            { name: '3 Stars', selected: false },
            { name: '4 Stars', selected: false },
            { name: '5 Stars', selected: false },
        ];
        var url = filterUrlBuilder.addRoomTypeFilter(roomTypeOptions).addPriceRangeFilter(priceRangeOptions).addRatingFilter(ratingOptions).getUrl();
        console.log(url);
        (0, console_1.assert)(url === 'http://test:port/api/version/etc&roomType=SINGLE,KING,SUITE&minPrice=25&maxPrice=50&minRating=1&maxRating=1.9');
    };
    FilterUrlTester.prototype.testFilterUrlBuilderRoomTypePriceRangeRating2 = function () {
        var filterUrlBuilder = new FilterUrlBuilder_1.FilterUrlBuilder(this.baseUrl);
        var roomTypeOptions = [
            { name: 'Single', selected: false },
            { name: 'Double', selected: false },
            { name: 'King', selected: false },
            { name: 'Queen', selected: false },
            { name: 'Suite', selected: false },
        ];
        var priceRangeOptions = [
            { name: 'Under 25€', selected: false },
            { name: '25€ - 50€', selected: false },
            { name: '50€ - 100€', selected: false },
            { name: '100€ - 200€', selected: false },
            { name: 'Over 200€', selected: true },
        ];
        var ratingOptions = [
            { name: '1 Star', selected: false },
            { name: '2 Stars', selected: false },
            { name: '3 Stars', selected: true },
            { name: '4 Stars', selected: false },
            { name: '5 Stars', selected: false },
        ];
        var url = filterUrlBuilder.addRoomTypeFilter(roomTypeOptions).addPriceRangeFilter(priceRangeOptions).addRatingFilter(ratingOptions).getUrl();
        console.log(url);
        (0, console_1.assert)(url === 'http://test:port/api/version/etc&minPrice=200&minRating=3&maxRating=3.9');
    };
    FilterUrlTester.prototype.testFilterUrlBuilderRoomTypePriceRangeRating3 = function () {
        var filterUrlBuilder = new FilterUrlBuilder_1.FilterUrlBuilder(this.baseUrl);
        var roomTypeOptions = [
            { name: 'Single', selected: true },
            { name: 'Double', selected: false },
            { name: 'King', selected: true },
            { name: 'Queen', selected: false },
            { name: 'Suite', selected: true },
        ];
        var priceRangeOptions = [
            { name: 'Under 25€', selected: false },
            { name: '25€ - 50€', selected: false },
            { name: '50€ - 100€', selected: false },
            { name: '100€ - 200€', selected: true },
            { name: 'Over 200€', selected: false },
        ];
        var ratingOptions = [
            { name: '1 Star', selected: false },
            { name: '2 Stars', selected: false },
            { name: '3 Stars', selected: false },
            { name: '4 Stars', selected: false },
            { name: '5 Stars', selected: true },
        ];
        var url = filterUrlBuilder.addRoomTypeFilter(roomTypeOptions).addPriceRangeFilter(priceRangeOptions).addRatingFilter(ratingOptions).getUrl();
        console.log(url);
        (0, console_1.assert)(url === 'http://test:port/api/version/etc&roomType=SINGLE,KING,SUITE&minPrice=100&maxPrice=200&minRating=5');
    };
    return FilterUrlTester;
}());
exports.FilterUrlTester = FilterUrlTester;
var tester = new FilterUrlTester();
tester.testFilterUrlBuilderRoomType1();
tester.testFilterUrlBuilderRoomType2();
tester.testFilterUrlBuilderPriceRange1();
tester.testFilterUrlBuilderPriceRange2();
tester.testFilterUrlBuilderPriceRange3();
tester.testFilterUrlBuilderRoomTypePriceRange1();
tester.testFilterUrlBuilderRoomTypePriceRange2();
tester.testFilterUrlBuilderRoomTypePriceRange3();
tester.testFilterUrlBuilderRating1();
tester.testFilterUrlBuilderRating2();
tester.testFilterUrlBuilderRating3();
tester.testFilterUrlBuilderRoomTypeRating1();
tester.testFilterUrlBuilderRoomTypeRating2();
tester.testFilterUrlBuilderRoomTypeRating3();
tester.testFilterUrlBuilderRoomTypePriceRangeRating1();
tester.testFilterUrlBuilderRoomTypePriceRangeRating2();
tester.testFilterUrlBuilderRoomTypePriceRangeRating3();
console.log('All tests passed!');
