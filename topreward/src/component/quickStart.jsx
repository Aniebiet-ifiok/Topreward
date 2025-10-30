import React from "react";
import { ArrowRight } from "lucide-react";

const QuickStartCard = () => {
  return (
    <div className="w-md-full sm:max-w-[88%] mt-8 mx-auto px-4 py-10 sm:px-0">
      <div className="bg-gray-100 rounded-xl shadow-md p-5 w-full mx-auto mt-6">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
            Quick Start Guide
          </h2>
          <ArrowRight className="text-gray-700" size={22} />
        </div>

        <div className="flex flex-col items-start gap-8">
          {/* Step 1 */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 flex items-center justify-center bg-black text-white text-sm font-semibold rounded-full">
              1
            </div>
            <div className="flex flex-col text-left">
              <p className="text-gray-900 font-semibold text-base">Provide Basic Info</p>
              <p className="text-gray-500 text-lg">Enter your email & basic info</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 flex items-center justify-center bg-black text-white text-sm font-semibold rounded-full">
              2
            </div>
            <div className="flex flex-col text-left">
              <p className="text-gray-900 font-semibold text-base">Complete Verification </p>
              <p className="text-gray-500 text-lg">Complete the required verification</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center bg-black text-white text-sm font-semibold rounded-full">
              3
            </div>
            <div className="flex flex-col text-left">
              <p className="text-gray-900 font-semibold text-base">Start Reviewing</p>
              <p className="text-gray-500 text-lg">Start your journey as a tiktok reviewer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickStartCard;
