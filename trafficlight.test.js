const app = require("./trafficlight");

describe('test suite traffic light', () => {
    it(`case red light`, () => {
        expect(app.trafficLight("red")).toBe("DON'T WALK!");
    });
});

describe('test suite traffic light', () => {
    it(`case orange light`, () => {
        expect(app.trafficLight("orange")).toBe("ATTENTION!");
    });
});

describe('test suite traffic light', () => {
    it(`case green light`, () => {
        expect(app.trafficLight("green")).toBe("WALK!");
    });
});

describe('test suite traffic light', () => {
    it(`case no light`, () => {
        expect(app.trafficLight()).toBe("OUT OF ORDER");
    });
});
