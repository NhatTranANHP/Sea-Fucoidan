// pages/products/seafucoidandx.tsx
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { GetStaticProps, GetStaticPaths } from 'next';

// Type definitions
interface ProductVariant {
  id: string;
  size: string;
  flavor: string;
  price: number;
  sku: string;
  available: boolean;
  image: string;
}

interface ProductSpecifications {
  contentVolume: string;
  flavorTypes: string;
  shelfLife: string;
  ingredients: {
    unsweetened: string;
    sweetened: string;
  };
  nutritionPer100g: {
    unsweetened: string;
    sweetened: string;
  };
  usage: string;
}

interface Product {
  id: string;
  title: string;
  price: number;
  currency: string;
  taxIncluded: boolean;
  soldOut: boolean;
  onSale: boolean;
  variants: ProductVariant[];
  specifications: ProductSpecifications;
}

interface ProductPageProps {
  product: Product;
}

// Product data (this would typically come from a CMS or API)
const productData: Product = {
  id: "8675431579933",
  title: "シーフコイダンDX",
  price: 13000,
  currency: "円",
  taxIncluded: true,
  soldOut: true,
  onSale: true,
  variants: [
    {
      id: "46580724990237",
      size: "900ml×2本",
      flavor: "無糖",
      price: 45000,
      sku: "dx-900-non-sugar",
      available: true,
      image: "/images/dx900x2.jpg"
    },
    {
      id: "46580725088541", 
      size: "900ml×2本",
      flavor: "加糖",
      price: 45000,
      sku: "dx-900-sugar",
      available: true,
      image: "/images/dx900x2.jpg"
    },
    {
      id: "46778018988317",
      size: "900ml×1本", 
      flavor: "無糖",
      price: 28000,
      sku: "dx-900-1-non-sugar",
      available: true,
      image: "/images/dx-lineup-900x1.jpg"
    },
    {
      id: "46778019053853",
      size: "900ml×1本",
      flavor: "加糖", 
      price: 28000,
      sku: "dx-900-1-sugar",
      available: true,
      image: "/images/dx-lineup-900x1.jpg"
    },
    {
      id: "46778019119389",
      size: "30ml×10本",
      flavor: "無糖",
      price: 13000,
      sku: "dx30-10-non-sugar", 
      available: true,
      image: "/images/dx-lineup-30.png"
    },
    {
      id: "46778019152157",
      size: "30ml×10本",
      flavor: "加糖",
      price: 13000,
      sku: "dx30-10-sugar",
      available: true, 
      image: "/images/dx-lineup-30.png"
    }
  ],
  specifications: {
    contentVolume: "【900ml×2本】【900ml×1本】【30ml×10本】",
    flavorTypes: "【無糖】【加糖】",
    shelfLife: "2年(未開封に限り)",
    ingredients: {
      unsweetened: "褐藻類(モズク,ダービリア)/ビタミンC　酸味料(クエン酸)　ビタミンB1　ニコチン酸アミド　ビタミンB6　ビタミンB2",
      sweetened: "褐藻類(モズク,ダービリア)　ハチミツ/ビタミンC　酸味料(クエン酸)　ビタミンB1　ニコチン酸アミド　ビタミンB6　ビタミンB2"
    },
    nutritionPer100g: {
      unsweetened: "エネルギー 5kcal、たんぱく質 0.1g、脂質 0.1g、炭水化物 1.9g(糖質 0.6g、食物繊維 1.3g)、ナトリウム 72.2mg(食塩相当量 0.183g)、ビタミンC 200mg、ビタミンB1 3.8mg、ビタミンB6 1.3mg",
      sweetened: "エネルギー 18kcal、たんぱく質 0.1g、脂質 0.1g、炭水化物 5.0g(糖質 3.8g、食物繊維 1.2g)、ナトリウム 73.6mg(食塩相当量 0.187g)、ビタミンC 200mg、ビタミンB1 4.5mg、ビタミンB6 1.3mg"
    },
    usage: "30ml × 1～2"
  }
};

const SeaFucoidanDXProduct: React.FC<ProductPageProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState<string>("30ml×10本");
  const [selectedFlavor, setSelectedFlavor] = useState<string>("無糖");
  const [quantity, setQuantity] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  // Get current variant based on selections
  const currentVariant = product.variants.find(
    (v: ProductVariant) => v.size === selectedSize && v.flavor === selectedFlavor
  );

  const handleAddToCart = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert(`カートに追加されました: ${currentVariant?.size} ${currentVariant?.flavor} × ${quantity}`);
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseInt(e.target.value) || 1;
    setQuantity(Math.max(1, value));
  };

  const increaseQuantity = (): void => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = (): void => {
    setQuantity(prev => Math.max(1, prev - 1));
  };

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('ja-JP').format(price);
  };

  // Get unique sizes and flavors
  const availableSizes = [...new Set(product.variants.map(v => v.size))];
  const availableFlavors = [...new Set(product.variants.map(v => v.flavor))];

  return (
    <>
      <Head>
        <title>{product.title} | シーフコイダン日本公式</title>
        <meta name="description" content={`${product.title}の商品ページ。海藻由来のフコイダンサプリメント。`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={currentVariant?.image || "/images/placeholder.jpg"}
                alt={`${product.title} - ${selectedSize} ${selectedFlavor}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.title}
              </h1>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="text-2xl font-bold text-gray-900">
                  {formatPrice(currentVariant?.price || product.price)} {product.currency}
                </div>
                {product.onSale && (
                  <span className="bg-red-500 text-white px-2 py-1 text-sm rounded">
                    セール
                  </span>
                )}
                {product.soldOut && (
                  <span className="bg-gray-500 text-white px-2 py-1 text-sm rounded">
                    売り切れ
                  </span>
                )}
              </div>
              
              <p className="text-sm text-gray-600">
                税込 <a href="/policies/shipping-policy" className="underline">配送料</a>はご購入手続き時に計算されます。
              </p>
            </div>

            <form onSubmit={handleAddToCart} className="space-y-6">
              {/* Size Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  サイズ
                </label>
                <div className="space-y-2">
                  {availableSizes.map((size: string) => (
                    <label key={size} className="flex items-center">
                      <input
                        type="radio"
                        name="size"
                        value={size}
                        checked={selectedSize === size}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSelectedSize(e.target.value)}
                        className="mr-2"
                      />
                      <span>{size}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Flavor Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  味の種類
                </label>
                <div className="space-y-2">
                  {availableFlavors.map((flavor: string) => (
                    <label key={flavor} className="flex items-center">
                      <input
                        type="radio"
                        name="flavor"
                        value={flavor}
                        checked={selectedFlavor === flavor}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSelectedFlavor(e.target.value)}
                        className="mr-2"
                      />
                      <span>{flavor}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  数量
                </label>
                <div className="flex items-center border rounded-md w-32">
                  <button
                    type="button"
                    onClick={decreaseQuantity}
                    className="px-3 py-2 text-gray-600 hover:text-gray-800 disabled:text-gray-400"
                    disabled={quantity <= 1}
                  >
                    −
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="flex-1 text-center border-0 focus:ring-0"
                  />
                  <button
                    type="button"
                    onClick={increaseQuantity}
                    className="px-3 py-2 text-gray-600 hover:text-gray-800"
                  >
                    ＋
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="space-y-3">
                <button
                  type="submit"
                  disabled={loading || product.soldOut}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {loading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    "カートに追加する"
                  )}
                </button>
                
                <button
                  type="button"
                  className="w-full bg-purple-600 text-white py-3 px-6 rounded-md hover:bg-purple-700"
                >
                  今すぐ購入
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Product Specifications */}
        <div className="mt-12 bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">商品説明</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <dt className="font-medium text-gray-700">内容量</dt>
                <dd className="text-gray-600">{product.specifications.contentVolume}</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-700">味の種類</dt>
                <dd className="text-gray-600">{product.specifications.flavorTypes}</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-700">賞味期限</dt>
                <dd className="text-gray-600">{product.specifications.shelfLife}</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-700">お召し上がり方</dt>
                <dd className="text-gray-600">{product.specifications.usage}</dd>
              </div>
            </div>
            
            <div>
              <dt className="font-medium text-gray-700 mb-2">原材料</dt>
              <div className="space-y-2 text-sm text-gray-600">
                <div>
                  <span className="font-medium">【無糖】</span>
                  {product.specifications.ingredients.unsweetened}
                </div>
                <div>
                  <span className="font-medium">【加糖】</span>
                  {product.specifications.ingredients.sweetened}
                </div>
              </div>
            </div>
            
            <div>
              <dt className="font-medium text-gray-700 mb-2">栄養成分表示100gあたり</dt>
              <div className="space-y-2 text-sm text-gray-600">
                <div>
                  <span className="font-medium">【無糖】</span>
                  {product.specifications.nutritionPer100g.unsweetened}
                </div>
                <div>
                  <span className="font-medium">【加糖】</span>
                  {product.specifications.nutritionPer100g.sweetened}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeaFucoidanDXProduct;

// Static Site Generation
export const getStaticProps: GetStaticProps<ProductPageProps> = async () => {
  // In a real application, you would fetch this data from an API or CMS
  // For this example, we're using the static data defined above
  return {
    props: {
      product: productData
    },
    // Regenerate the page at most once per hour
    revalidate: 3600
  };
};

// If you have multiple products, you would also need getStaticPaths
export const getStaticPaths: GetStaticPaths = async () => {
  // In a real app, you would fetch all product slugs from your API
  const paths = [
    { params: { slug: 'seafucoidandx' } }
  ];

  return {
    paths,
    fallback: 'blocking' // or false if you want 404 for unknown paths
  };
};