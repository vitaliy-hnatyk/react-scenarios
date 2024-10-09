/*
Question: You have a component that renders a large list of items. 
How would you optimize the performance to prevent unnecessary re-renders?

Answer:
    * Use React.memo to prevent unnecessary re-renders of child components when the props haven’t changed.
    * Use the useMemo hook to memoize expensive calculations so they don’t re-run unless necessary.
    *Use useCallback to memoize functions passed as props.

*/

import React, { useMemo, useCallback } from 'react';

const ItemList = React.memo(({ items }) => {
    console.log('Rendering ItemList');
    return <ul>
        {
            items.map((item) => (
                <li key={item.id} > {item.name} </li>
            ))
        }
    </ul>;
});

const LargeList = ({ items }) => {
    const sortedItems = useMemo(() => {
        return items.sort((a, b) => a.name.localeCompare(b.name));
    }, [items]);

    const handleClick = useCallback(() => {
        console.log('Item clicked');
    }, []);

    return <ItemList items={sortedItems} onClick={handleClick} />;
};

export default LargeList;