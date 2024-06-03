const generateGradientString = (gradient: any) => {
    const colorStops = gradient?.newColor?.map(({ color, percentage }: any) => ({
      color,
      position: percentage,
    }));
  
    const gradientString = colorStops
      .map(({ color, position }: any) => `${color} ${position}%`)
      .join(", ");
  
    if (gradient?.gradientType === "linear") {
      return `linear-gradient(${gradient?.rotation}deg, ${gradientString})`;
    } else {
      return `radial-gradient(at ${gradient?.radialHorizontalPosition}% ${gradient?.radialVerticalPosition}%, ${gradientString})`;
    }
  };
  export default  generateGradientString;