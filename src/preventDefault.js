const preventDefault = cb => {
    return (event, ...others) => {
        event.preventDefault();
        cb(event, ...others);
    };
};

export default preventDefault; // Ironic, don't you think?
