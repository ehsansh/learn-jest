const forEach = (items, callBack) => {
    for (let i = 0; i < items.length; i++) callBack(items[i]);
};

it('mock callback', () => {
    const mockCallback = jest.fn(x => x + 10);
    forEach([10, 22], mockCallback);

    expect(mockCallback.mock.calls.length).toBe(2);

    expect(mockCallback.mock.calls[0][0]).toBe(10);
    expect(mockCallback.mock.calls[1][0]).toBe(22);

    expect(mockCallback.mock.results[0].value).toBe(20);
});

it('mock return', () => {
    const mock = jest.fn();
    mock.mockReturnValueOnce(true).mockReturnValueOnce(false);
    const results1 = mock();
    expect(results1).toBe(true);
    const results2 = mock();
    expect(results2).toBe(false);
});
