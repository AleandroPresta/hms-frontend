import { assert } from "console";
import { FilterOptions } from "../../filter-options/options";
import { FilterUrlBuilder } from "../FilterUrlBuilder";

export class FilterUrlTester {
    // Test the FilterUrlBuilder class
    baseUrl: string = 'http://test:port/api/version/etc';

    testFilterUrlBuilderRoomType1() {
        const filterUrlBuilder = new FilterUrlBuilder(this.baseUrl);
        const roomTypeOptions: FilterOptions[] = [
            { name: 'Single', selected: true },
            { name: 'Double', selected: false },
            { name: 'King', selected: true },
            { name: 'Queen', selected: false },
            { name: 'Suite', selected: true },
        ];
        const url: string = filterUrlBuilder.addRoomTypeFilter(roomTypeOptions).getUrl();
        console.log(url);
        assert(url === 'http://test:port/api/version/etc&roomType=SINGLE,KING,SUITE');
    }

    testFilterUrlBuilderRoomType2() {
        const filterUrlBuilder = new FilterUrlBuilder(this.baseUrl);
        const roomTypeOptions: FilterOptions[] = [
            { name: 'Single', selected: false },
            { name: 'Double', selected: false },
            { name: 'King', selected: false },
            { name: 'Queen', selected: false },
            { name: 'Suite', selected: false },
        ];
        const url = filterUrlBuilder.addRoomTypeFilter(roomTypeOptions).getUrl();
        console.log(url);
        assert(url === 'http://test:port/api/version/etc');
    }

    testFilterUrlBuilderPriceRange1() {
        const filterUrlBuilder = new FilterUrlBuilder(this.baseUrl);
        const priceRangeOptions: FilterOptions[] = [
            { name: 'Under 25€', selected: false },
            { name: '25€ - 50€', selected: false },
            { name: '50€ - 100€', selected: false },
            { name: '100€ - 200€', selected: true },
            { name: 'Over 200€', selected: false },
        ];
        const url = filterUrlBuilder.addPriceRangeFilter(priceRangeOptions).getUrl();
        console.log(url);
        assert(url === 'http://test:port/api/version/etc&minPrice=100&maxPrice=200');
    }

    testFilterUrlBuilderPriceRange2() {
        const filterUrlBuilder = new FilterUrlBuilder(this.baseUrl);
        const priceRangeOptions: FilterOptions[] = [
            { name: 'Under 25€', selected: false },
            { name: '25€ - 50€', selected: false },
            { name: '50€ - 100€', selected: false },
            { name: '100€ - 200€', selected: false },
            { name: 'Over 200€', selected: true },
        ];
        const url = filterUrlBuilder.addPriceRangeFilter(priceRangeOptions).getUrl();
        console.log(url);
        assert(url === 'http://test:port/api/version/etc&minPrice=200');
    }

    testFilterUrlBuilderPriceRange3() {
        const filterUrlBuilder = new FilterUrlBuilder(this.baseUrl);
        const priceRangeOptions: FilterOptions[] = [
            { name: 'Under 25€', selected: false },
            { name: '25€ - 50€', selected: true },
            { name: '50€ - 100€', selected: false },
            { name: '100€ - 200€', selected: false },
            { name: 'Over 200€', selected: false },
        ];
        const url = filterUrlBuilder.addPriceRangeFilter(priceRangeOptions).getUrl();
        console.log(url);
        assert(url === 'http://test:port/api/version/etc&minPrice=25&maxPrice=50');
    }

    testFilterUrlBuilderRoomTypePriceRange1() {
        const filterUrlBuilder = new FilterUrlBuilder(this.baseUrl);
        const roomTypeOptions: FilterOptions[] = [
            { name: 'Single', selected: true },
            { name: 'Double', selected: false },
            { name: 'King', selected: true },
            { name: 'Queen', selected: false },
            { name: 'Suite', selected: true },
        ];
        const priceRangeOptions: FilterOptions[] = [
            { name: 'Under 25€', selected: false },
            { name: '25€ - 50€', selected: true },
            { name: '50€ - 100€', selected: false },
            { name: '100€ - 200€', selected: false },
            { name: 'Over 200€', selected: false },
        ];
        const url = filterUrlBuilder.addRoomTypeFilter(roomTypeOptions).addPriceRangeFilter(priceRangeOptions).getUrl();
        console.log(url);
        assert(url === 'http://test:port/api/version/etc&roomType=SINGLE,KING,SUITE&minPrice=25&maxPrice=50');
    }

    testFilterUrlBuilderRoomTypePriceRange2() {
        const filterUrlBuilder = new FilterUrlBuilder(this.baseUrl);
        const roomTypeOptions: FilterOptions[] = [
            { name: 'Single', selected: false },
            { name: 'Double', selected: false },
            { name: 'King', selected: false },
            { name: 'Queen', selected: false },
            { name: 'Suite', selected: false },
        ];
        const priceRangeOptions: FilterOptions[] = [
            { name: 'Under 25€', selected: false },
            { name: '25€ - 50€', selected: false },
            { name: '50€ - 100€', selected: false },
            { name: '100€ - 200€', selected: false },
            { name: 'Over 200€', selected: true },
        ];
        const url = filterUrlBuilder.addRoomTypeFilter(roomTypeOptions).addPriceRangeFilter(priceRangeOptions).getUrl();
        console.log(url);
        assert(url === 'http://test:port/api/version/etc&minPrice=200');
    }

    testFilterUrlBuilderRoomTypePriceRange3() {
        const filterUrlBuilder = new FilterUrlBuilder(this.baseUrl);
        const roomTypeOptions: FilterOptions[] = [
            { name: 'Single', selected: true },
            { name: 'Double', selected: false },
            { name: 'King', selected: true },
            { name: 'Queen', selected: false },
            { name: 'Suite', selected: true },
        ];
        const priceRangeOptions: FilterOptions[] = [
            { name: 'Under 25€', selected: false },
            { name: '25€ - 50€', selected: false },
            { name: '50€ - 100€', selected: false },
            { name: '100€ - 200€', selected: true },
            { name: 'Over 200€', selected: false },
        ];
        const url = filterUrlBuilder.addRoomTypeFilter(roomTypeOptions).addPriceRangeFilter(priceRangeOptions).getUrl();
        console.log(url);
        assert(url === 'http://test:port/api/version/etc&roomType=SINGLE,KING,SUITE&minPrice=100&maxPrice=200');
    }

    testFilterUrlBuilderRating1() {
        const filterUrlBuilder = new FilterUrlBuilder(this.baseUrl);
        const ratingOptions: FilterOptions[] = [
            { name: '1 Star', selected: true },
            { name: '2 Stars', selected: false },
            { name: '3 Stars', selected: false },
            { name: '4 Stars', selected: false },
            { name: '5 Stars', selected: false },
        ];
        const url = filterUrlBuilder.addRatingFilter(ratingOptions).getUrl();
        console.log(url);
        assert(url === 'http://test:port/api/version/etc&minRating=1&maxRating=1.9');
    }

    testFilterUrlBuilderRating2() {
        const filterUrlBuilder = new FilterUrlBuilder(this.baseUrl);
        const ratingOptions: FilterOptions[] = [
            { name: '1 Star', selected: false },
            { name: '2 Stars', selected: false },
            { name: '3 Stars', selected: true },
            { name: '4 Stars', selected: false },
            { name: '5 Stars', selected: false },
        ];
        const url = filterUrlBuilder.addRatingFilter(ratingOptions).getUrl();
        console.log(url);
        assert(url === 'http://test:port/api/version/etc&minRating=3&maxRating=3.9');
    }

    testFilterUrlBuilderRating3() {
        const filterUrlBuilder = new FilterUrlBuilder(this.baseUrl);
        const ratingOptions: FilterOptions[] = [
            { name: '1 Star', selected: false },
            { name: '2 Stars', selected: false },
            { name: '3 Stars', selected: false },
            { name: '4 Stars', selected: false },
            { name: '5 Stars', selected: true },
        ];
        const url = filterUrlBuilder.addRatingFilter(ratingOptions).getUrl();
        console.log(url);
        assert(url === 'http://test:port/api/version/etc&minRating=5');
    }

    testFilterUrlBuilderRoomTypeRating1() {
        const filterUrlBuilder = new FilterUrlBuilder(this.baseUrl);
        const roomTypeOptions: FilterOptions[] = [
            { name: 'Single', selected: true },
            { name: 'Double', selected: false },
            { name: 'King', selected: true },
            { name: 'Queen', selected: false },
            { name: 'Suite', selected: true },
        ];
        const ratingOptions: FilterOptions[] = [
            { name: '1 Star', selected: true },
            { name: '2 Stars', selected: false },
            { name: '3 Stars', selected: false },
            { name: '4 Stars', selected: false },
            { name: '5 Stars', selected: false },
        ];
        const url = filterUrlBuilder.addRoomTypeFilter(roomTypeOptions).addRatingFilter(ratingOptions).getUrl();
        console.log(url);
        assert(url === 'http://test:port/api/version/etc&roomType=SINGLE,KING,SUITE&minRating=1&maxRating=1.9');
    }

    testFilterUrlBuilderRoomTypeRating2() {
        const filterUrlBuilder = new FilterUrlBuilder(this.baseUrl);
        const roomTypeOptions: FilterOptions[] = [
            { name: 'Single', selected: false },
            { name: 'Double', selected: false },
            { name: 'King', selected: false },
            { name: 'Queen', selected: false },
            { name: 'Suite', selected: false },
        ];
        const ratingOptions: FilterOptions[] = [
            { name: '1 Star', selected: false },
            { name: '2 Stars', selected: false },
            { name: '3 Stars', selected: true },
            { name: '4 Stars', selected: false },
            { name: '5 Stars', selected: false },
        ];
        const url = filterUrlBuilder.addRoomTypeFilter(roomTypeOptions).addRatingFilter(ratingOptions).getUrl();
        console.log(url);
        assert(url === 'http://test:port/api/version/etc&minRating=3&maxRating=3.9');
    }

    testFilterUrlBuilderRoomTypeRating3() {
        const filterUrlBuilder = new FilterUrlBuilder(this.baseUrl);
        const roomTypeOptions: FilterOptions[] = [
            { name: 'Single', selected: true },
            { name: 'Double', selected: false },
            { name: 'King', selected: true },
            { name: 'Queen', selected: false },
            { name: 'Suite', selected: true },
        ];
        const ratingOptions: FilterOptions[] = [
            { name: '1 Star', selected: false },
            { name: '2 Stars', selected: false },
            { name: '3 Stars', selected: false },
            { name: '4 Stars', selected: false },
            { name: '5 Stars', selected: true },
        ];
        const url = filterUrlBuilder.addRoomTypeFilter(roomTypeOptions).addRatingFilter(ratingOptions).getUrl();
        console.log(url);
        assert(url === 'http://test:port/api/version/etc&roomType=SINGLE,KING,SUITE&minRating=5');
    }

    testFilterUrlBuilderRoomTypePriceRangeRating1() {
        const filterUrlBuilder = new FilterUrlBuilder(this.baseUrl);
        const roomTypeOptions: FilterOptions[] = [
            { name: 'Single', selected: true },
            { name: 'Double', selected: false },
            { name: 'King', selected: true },
            { name: 'Queen', selected: false },
            { name: 'Suite', selected: true },
        ];
        const priceRangeOptions: FilterOptions[] = [
            { name: 'Under 25€', selected: false },
            { name: '25€ - 50€', selected: true },
            { name: '50€ - 100€', selected: false },
            { name: '100€ - 200€', selected: false },
            { name: 'Over 200€', selected: false },
        ];
        const ratingOptions: FilterOptions[] = [
            { name: '1 Star', selected: true },
            { name: '2 Stars', selected: false },
            { name: '3 Stars', selected: false },
            { name: '4 Stars', selected: false },
            { name: '5 Stars', selected: false },
        ];
        const url = filterUrlBuilder.addRoomTypeFilter(roomTypeOptions).addPriceRangeFilter(priceRangeOptions).addRatingFilter(ratingOptions).getUrl();
        console.log(url);
        assert(url === 'http://test:port/api/version/etc&roomType=SINGLE,KING,SUITE&minPrice=25&maxPrice=50&minRating=1&maxRating=1.9');
    }

    testFilterUrlBuilderRoomTypePriceRangeRating2() {
        const filterUrlBuilder = new FilterUrlBuilder(this.baseUrl);
        const roomTypeOptions: FilterOptions[] = [
            { name: 'Single', selected: false },
            { name: 'Double', selected: false },
            { name: 'King', selected: false },
            { name: 'Queen', selected: false },
            { name: 'Suite', selected: false },
        ];
        const priceRangeOptions: FilterOptions[] = [
            { name: 'Under 25€', selected: false },
            { name: '25€ - 50€', selected: false },
            { name: '50€ - 100€', selected: false },
            { name: '100€ - 200€', selected: false },
            { name: 'Over 200€', selected: true },
        ];
        const ratingOptions: FilterOptions[] = [
            { name: '1 Star', selected: false },
            { name: '2 Stars', selected: false },
            { name: '3 Stars', selected: true },
            { name: '4 Stars', selected: false },
            { name: '5 Stars', selected: false },
        ];
        const url = filterUrlBuilder.addRoomTypeFilter(roomTypeOptions).addPriceRangeFilter(priceRangeOptions).addRatingFilter(ratingOptions).getUrl();
        console.log(url);
        assert(url === 'http://test:port/api/version/etc&minPrice=200&minRating=3&maxRating=3.9');
    }

    testFilterUrlBuilderRoomTypePriceRangeRating3() {
        const filterUrlBuilder = new FilterUrlBuilder(this.baseUrl);
        const roomTypeOptions: FilterOptions[] = [
            { name: 'Single', selected: true },
            { name: 'Double', selected: false },
            { name: 'King', selected: true },
            { name: 'Queen', selected: false },
            { name: 'Suite', selected: true },
        ];
        const priceRangeOptions: FilterOptions[] = [
            { name: 'Under 25€', selected: false },
            { name: '25€ - 50€', selected: false },
            { name: '50€ - 100€', selected: false },
            { name: '100€ - 200€', selected: true },
            { name: 'Over 200€', selected: false },
        ];
        const ratingOptions: FilterOptions[] = [
            { name: '1 Star', selected: false },
            { name: '2 Stars', selected: false },
            { name: '3 Stars', selected: false },
            { name: '4 Stars', selected: false },
            { name: '5 Stars', selected: true },
        ];
        const url = filterUrlBuilder.addRoomTypeFilter(roomTypeOptions).addPriceRangeFilter(priceRangeOptions).addRatingFilter(ratingOptions).getUrl();
        console.log(url);
        assert(url === 'http://test:port/api/version/etc&roomType=SINGLE,KING,SUITE&minPrice=100&maxPrice=200&minRating=5');
    }
}

const tester = new FilterUrlTester();

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