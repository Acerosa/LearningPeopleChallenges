import PropTypes from "prop-types";


function List(props) {
    // const fruits = [
    //     { id: 1, name: "apple", calories: 95 },
    //     { id: 2, name: "orange", calories: 45 },
    //     { id: 3, name: "banana", calories: 105 },
    //     { id: 4, name: "coconut", calories: 159 },
    //     { id: 5, name: "pineapple", calories: 37 }
    // ];

    const itemList = props.items;
    const category = props.category;

    const listItems = itemList.map(item => (
        <li key={item.id}>
            {item.name} - {item.calories} calories
        </li>
    ));
    //const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
    //fruits. sort((a, b) => a. name. localeCompare(b.name)); 
    //ALPHABETICAL //fruits. sort((a, b) => b. name. localeCompare(a.name)); 
    // REVERSE ALPHABETICAL //fruits. sort((a, b) =› a. calories - b. calories); 
    // NUMERIC //fruits.sort((a, b) => b.calories - a.calories); 
    // REVERSE NUMERIC highcalFruits = fruits.filter(fruit => fruit.calories ›= 100);

    // Generate list items
    // const listItems = highCalFruits.map(highCalFruit => (
    //     <li key={highCalFruit.id}>
    //         {highCalFruit.name} - {highCalFruit.calories} calories
    //     </li>


    //  );

    return (
        <>
            <h1 className="listCat">{category}</h1>
            {itemList.length > 0 ? (
                <ol className="lItems">
                    {listItems}
                </ol>
            ) : (
                <p>No items to display.</p>
            )}
        </>
    );
}

List.defaultProps = {
    items: [],
    category: "Default Category"
};


List.defaultProps = {
    items: [],
    category: "Default Category"
};
List.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            calories: PropTypes.number.isRequired
        })
    ),
    category: PropTypes.string
};
export default List;

