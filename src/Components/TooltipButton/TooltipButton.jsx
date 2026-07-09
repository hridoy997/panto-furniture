const TooltipButton = ({ position = "bottom", colors = ['bg-red-700', 'bg-green-700', 'bg-blue-700'] }) => {

    const tooltipPositionClasses = {
        bottom: {
            tooltip: 'bottom-full left-1/2 transform -translate-x-1/2 mb-3',
            arrow: 'left-1/2 transform -translate-x-1/2 -bottom-2 border-1',
        },
    };

    return (
        <div className="relative group">
            <button className="relative p-4 bg-white/25 border border-white rounded-full">
                <div className={`hidden absolute ${tooltipPositionClasses[position].tooltip} space-x-1 p-2 rounded-lg bg-white/25 shadow-md group-hover:flex`}>
                    {colors.map((color, index) => (
                        <div
                            key={index}
                            className={`size-6 rounded-full border border-white ${color}`}
                        />
                    ))}
                    {/* tooltip arrow */}
                    <div className={`absolute ${tooltipPositionClasses[position].arrow} w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/35`}></div>
                </div>
            </button>
        </div>
    )
}

export default TooltipButton
