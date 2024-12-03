import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        {/* 로고 및 주소 정보 */}
        <div className="flex flex-col lg:flex-row justify-between mb-6">
          <div className="mb-4 lg:mb-0">
            <img src="/logo.png" alt="로고" className="h-12 mb-2" />
            <p className="text-sm text-gray-600">
              (08503) 서울 금천구 가산디지털2로 144 현대테라타워 가산DK A동 20층
            </p>
            <p className="text-sm text-gray-600">
              총장: 황현지 | 대표전화: 02-2038-0800 | FAX: 02-000-0000
            </p>
          </div>
        </div>

        {/* 저작권 정보 */}
        <div className="border-t border-gray-200 pt-4 mt-4">
          <p className="text-sm text-gray-500 text-center">
            COPYRIGHT © by CodeLab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
