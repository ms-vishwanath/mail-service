import React from "react";

type Feature = {
    title: string;
    description: string;
    icon?: React.ReactNode;
};

type FeatureGridProps = {
    features: Feature[];
    className?: string;
};

export default function FeatureGrid({ features, className = "" }: FeatureGridProps) {
    return (
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${className}`}>
            {features.map((feature, index) => (
                <div key={index} className="bg-primary rounded-md p-6">
                    {feature.icon && <div className="text-3xl mb-3">{feature.icon}</div>}
                    <h3 className="font-semibold text-lg mb-2 ">
                        {feature.title}
                    </h3>
                    <p className="">{feature.description}</p>
                </div>
            ))}
        </div>
    );
}
