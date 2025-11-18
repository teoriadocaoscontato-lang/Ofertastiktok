'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Battery, Zap, Droplets, Volume2, ShoppingCart, Star, Check, X } from 'lucide-react'

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState({ type: '', src: '', alt: '' })
  const [timeLeft, setTimeLeft] = useState(3600) // 1 hora em segundos

  const openModal = (type: 'image' | 'video', src: string, alt: string = '') => {
    setModalContent({ type, src, alt })
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setModalContent({ type: '', src: '', alt: '' })
  }

  // Countdown timer
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer)
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const productImages = [
    {
      id: 0,
      url: 'https://s2-techtudo.glbimg.com/Nxv1xMOrZ4fi7jqkJBvuBQipvRE=/0x0:1900x1267/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2025/x/V/wNkhIBSSufXr7Jbscwvg/sabala-dr-909.jpg',
      alt: 'Sabala Dr-909 Bluetooth Speaker'
    },
    {
      id: 1,
      url: 'https://m.media-amazon.com/images/I/71UdXKLESpL._AC_SX679_.jpg',
      alt: 'Sabala Dr-909 Bluetooth Speaker with phone charging'
    },
    {
      id: 2,
      url: 'https://m.media-amazon.com/images/I/81ZyQ6z3cFL._AC_SX679_.jpg',
      alt: 'Sabala Dr-909 Speaker internal components and sound system'
    },
    {
      id: 3,
      url: 'https://m.media-amazon.com/images/I/81xC6lYJ4nL._AC_SL1500_.jpg',
      alt: 'Sabala Dr-909 Speaker at pool party - water resistant'
    },
    {
      id: 4,
      url: 'https://m.media-amazon.com/images/I/81nKMO4wosL._AC_SL1500_.jpg',
      alt: 'Sabala Dr-909 Speaker with equalizer modes'
    },
    {
      id: 5,
      url: 'https://m.media-amazon.com/images/I/81Gvdm4XGML._AC_SL1500_.jpg',
      alt: 'Sabala Dr-909 Portable speaker for outdoor activities'
    }
  ]

  const usageScenarios = [
    {
      id: 1,
      title: 'Acampamento',
      description: 'Perfeito para aventuras ao ar livre',
      image: 'https://i.ibb.co/XrR5ws4t/Chat-GPT-Image-14-de-nov-de-2025-17-55-06.png'
    },
    {
      id: 2,
      title: 'Praia',
      description: 'Resistente à água para diversão na praia',
      image: 'https://i.ibb.co/fdGpPJN6/Chat-GPT-Image-14-de-nov-de-2025-17-52-08.png'
    },
    {
      id: 3,
      title: 'Festas',
      description: 'Potência máxima para suas celebrações',
      image: 'https://i.ibb.co/fdvs2vvF/Chat-GPT-Image-14-de-nov-de-2025-17-55-36.png'
    }
  ]

  const features = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: '200W Alta Potência',
      description: 'Som potente e envolvente'
    },
    {
      icon: <Battery className="w-5 h-5" />,
      title: 'Bateria de 39000mAh',
      description: 'Até 24 horas de reprodução'
    },
    {
      icon: <Droplets className="w-5 h-5" />,
      title: 'Resistente à Água',
      description: 'Proteção IPX7'
    },
    {
      icon: <Volume2 className="w-5 h-5" />,
      title: 'Bluetooth 5.0',
      description: 'Conexão estável e rápida'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Urgency Bar */}
      <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white text-center py-2 px-4 text-sm font-semibold">
        <div className="flex items-center justify-center gap-2">
          <Zap className="w-4 h-4 animate-pulse" />
          <span>🔥 OFERTA LIMITADA - 95% DESCONTO - APENAS HOJE 🔥</span>
          <Zap className="w-4 h-4 animate-pulse" />
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="relative w-32 h-12">
              <img
                src="https://cloudfox-digital-products.s3.amazonaws.com/uploads/user/Qz0qn35wANG98mA/public/stores/xQBPZvLLLQgmVqy/logo/cfpzstQvA6yCwwVWkLXJWNf8he5D1vBS3unZlUiv.png"
                alt="Sabala Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50">
                Contato
              </Button>
              <Button size="sm" className="bg-red-600 hover:bg-red-700" asChild>
                <a href="https://pagar.0fertastiktok.shop" target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Comprar Agora
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Product Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden rounded-lg border border-gray-200">
              <img
                src={productImages[selectedImage].url}
                alt={productImages[selectedImage].alt}
                className="w-full h-full object-cover"
              />
              {selectedImage === 0 && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-blue-500 text-white">
                    <Droplets className="w-3 h-3 mr-1" />
                    Resistente à Água
                  </Badge>
                </div>
              )}
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-6 gap-2">
              {productImages.map((image) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(image.id)}
                  className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                    selectedImage === image.id
                      ? 'border-blue-500 ring-2 ring-blue-200'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            {/* Title and Price */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(4.8/5 - 234 avaliações)</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Sabala Dr-909 Caixa de Som Bluetooth
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                Sistema de áudio potente para todas as ocasiões
              </p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-red-600">R$ 47,90</span>
                <span className="text-lg text-gray-500 line-through">R$ 1297,90</span>
                <Badge className="bg-red-500 text-white">95% OFF</Badge>
              </div>

              {/* Flash Sale Countdown */}
              <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 animate-pulse" />
                    <span className="font-bold text-lg">Oferta Relâmpago</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm opacity-90">Termina em:</div>
                    <div className="font-mono font-bold text-xl">{formatTime(timeLeft)}</div>
                  </div>
                </div>
                <div className="mt-2 bg-white bg-opacity-20 rounded-full h-2">
                  <div 
                    className="bg-white h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${(timeLeft / 3600) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="border-red-200 bg-red-50 hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-red-100 rounded-lg text-red-600">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm">
                          {feature.title}
                        </h3>
                        <p className="text-xs text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button size="lg" className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-lg shadow-lg transform transition-all hover:scale-105" asChild>
                <a href="https://pagar.0fertastiktok.shop" target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Comprar Agora
                </a>
              </Button>
              <Button variant="outline" size="lg" className="w-full border-red-500 text-red-600 hover:bg-red-50 font-semibold" asChild>
                <a href="https://pagar.0fertastiktok.shop" target="_blank" rel="noopener noreferrer">
                  Adicionar ao Carrinho
                </a>
              </Button>
            </div>

            {/* Product Benefits */}
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Por que escolher Sabala Dr-909?</h3>
                <div className="space-y-3">
                  {[
                    'Som premium com graves profundos',
                    'Design portátil e resistente',
                    'Conectividade Bluetooth 5.0 estável',
                    'Bateria de longa duração',
                    'Ideal para festas e eventos ao ar livre'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Usage Scenarios Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perfeito para Qualquer Ocasião
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Leve sua música para qualquer lugar com a Sabala Dr-909
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {usageScenarios.map((scenario) => (
              <Card key={scenario.id} className="overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={scenario.image}
                    alt={scenario.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {scenario.title}
                  </h3>
                  <p className="text-gray-600">{scenario.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Specifications */}
        <section className="mb-16">
          <Card className="border border-gray-200">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Especificações Técnicas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Potência</span>
                    <span className="font-medium text-gray-900">200W RMS</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Bateria</span>
                    <span className="font-medium text-gray-900">39000mAh</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Autonomia</span>
                    <span className="font-medium text-gray-900">Até 24 horas</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Conectividade</span>
                    <span className="font-medium text-gray-900">Bluetooth 5.0</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Resistência</span>
                    <span className="font-medium text-gray-900">IPX7</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Peso</span>
                    <span className="font-medium text-gray-900">2.5 kg</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Customer Reviews Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Avaliações de Clientes
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-semibold text-gray-900">4.9</span>
              <span className="text-gray-600">(2,847 avaliações)</span>
            </div>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {/* Review 1 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <img 
                  src="https://sabala-dr909.shop/assets/review-profile-carlos-7iuLmgL6.jpg" 
                  alt="Carlos Silva" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-900">Carlos Silva</h4>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">Há 2 dias</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      Verificado
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3">
                    "caixa muito top mesmo. Qualidade boa, recomendo compra"
                  </p>
                  
                  {/* Video Review */}
                  <div className="mb-3">
                    <div 
                      className="relative cursor-pointer group"
                      onClick={() => openModal('video', 'https://sabala-dr909.shop/assets/review-video-1-sDch2mUL.mp4', 'Review Video Carlos Silva')}
                    >
                      <img 
                        src="https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=600&fit=crop"
                        alt="Video Preview - Review Carlos Silva"
                        className="w-full h-32 object-cover rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all rounded-lg flex items-center justify-center">
                        <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100">
                          <div className="w-0 h-0 border-l-[12px] border-l-red-600 border-y-[8px] border-y-transparent ml-1"></div>
                        </div>
                      </div>
                      <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                        ▶ Vídeo
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <button className="hover:text-blue-600">👍 Útil (23)</button>
                    </div>
                    <div className="text-sm text-gray-500">
                      São Paulo, SP
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <img 
                  src="https://sabala-dr909.shop/assets/review-profile-2-CPHO2E74.jpg" 
                  alt="Rafaela Lima" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-900">Rafaela Lima</h4>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">Há 5 dias</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      Verificado
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3">
                    "chegou em 2 dias, melhor compra que fiz to apaixonada nessa caixa serio mesmo"
                  </p>
                  
                  {/* Review Images */}
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <img 
                      src="https://sabala-dr909.shop/assets/review-sabala-1-DEk54Dev.jpg" 
                      alt="Review Sabala 1" 
                      className="w-full h-32 object-cover rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => openModal('image', 'https://sabala-dr909.shop/assets/review-sabala-1-DEk54Dev.jpg', 'Review Sabala 1')}
                    />
                    <img 
                      src="https://sabala-dr909.shop/assets/review-sabala-2-DjTn39B4.jpg" 
                      alt="Review Sabala 2" 
                      className="w-full h-32 object-cover rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => openModal('image', 'https://sabala-dr909.shop/assets/review-sabala-2-DjTn39B4.jpg', 'Review Sabala 2')}
                    />
                    <img 
                      src="https://sabala-dr909.shop/assets/review-sabala-3-X5nJZVc8.jpg" 
                      alt="Review Sabala 3" 
                      className="w-full h-32 object-cover rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => openModal('image', 'https://sabala-dr909.shop/assets/review-sabala-3-X5nJZVc8.jpg', 'Review Sabala 3')}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <button className="hover:text-blue-600">👍 Útil (18)</button>
                    </div>
                    <div className="text-sm text-gray-500">
                      Rio de Janeiro, RJ
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <img 
                  src="https://sabala-dr909.shop/assets/review-profile-3-DIYsgiJG.jpg" 
                  alt="Pedro Raul" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-900">Pedro Raul</h4>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">Há 1 semana</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      Verificado
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3">
                    "Pensa numa caixa de som que me surpreendeu, já tive vários modelos e inclusive várias da JBL, mas essa Sabala DR 909 é boa demais e melhor custo benefício, pra mim ela chega a ter som tão alto quanto a JBL Party 100 que já tive, com excelente sub grave e ótimos médios e agudos."
                  </p>
                  
                  {/* Review Images */}
                  <div className="grid grid-cols-2 gap-2 mb-3 max-w-sm">
                    <img 
                      src="https://sabala-dr909.shop/assets/review-sabala-4-BrKH41oW.jpg" 
                      alt="Review Sabala 4" 
                      className="w-full h-32 object-cover rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => openModal('image', 'https://sabala-dr909.shop/assets/review-sabala-4-BrKH41oW.jpg', 'Review Sabala 4')}
                    />
                    <img 
                      src="https://sabala-dr909.shop/assets/review-sabala-5-zBAsFUSg.jpg" 
                      alt="Review Sabala 5" 
                      className="w-full h-32 object-cover rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => openModal('image', 'https://sabala-dr909.shop/assets/review-sabala-5-zBAsFUSg.jpg', 'Review Sabala 5')}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <button className="hover:text-blue-600">👍 Útil (31)</button>
                    </div>
                    <div className="text-sm text-gray-500">
                      Belo Horizonte, MG
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Review 4 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <img 
                  src="https://sabala-dr909.shop/assets/review-profile-pietro-DFBhw6F0.jpg" 
                  alt="Pietro Santos" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-900">Pietro Santos</h4>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          {[...Array(4)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                          <Star key={4} className="w-4 h-4 text-gray-300" />
                        </div>
                        <span className="text-sm text-gray-500">Há 2 semanas</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      Verificado
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3">
                    "Produto com ótima qualidade, grave muito bom e bateria muito duradoura."
                  </p>
                  
                  {/* Review Images */}
                  <div className="grid grid-cols-2 gap-2 mb-3 max-w-sm">
                    <img 
                      src="https://sabala-dr909.shop/assets/review-sabala-6-BXbP8AVU.jpg" 
                      alt="Review Sabala 6" 
                      className="w-full h-32 object-cover rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => openModal('image', 'https://sabala-dr909.shop/assets/review-sabala-6-BXbP8AVU.jpg', 'Review Sabala 6')}
                    />
                    <img 
                      src="https://sabala-dr909.shop/assets/review-sabala-7-Bv13gMhM.jpg" 
                      alt="Review Sabala 7" 
                      className="w-full h-32 object-cover rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => openModal('image', 'https://sabala-dr909.shop/assets/review-sabala-7-Bv13gMhM.jpg', 'Review Sabala 7')}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <button className="hover:text-blue-600">👍 Útil (12)</button>
                    </div>
                    <div className="text-sm text-gray-500">
                      Curitiba, PR
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Statistics */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-xl p-8 text-center shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">2000+</div>
                  <div className="text-lg opacity-90">Avaliações</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">98%</div>
                  <div className="text-lg opacity-90">Foram 5 Estrelas</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">4.9</div>
                  <div className="text-lg opacity-90">Média Geral</div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-white border-opacity-30">
                <div className="text-center">
                  <div className="text-xl font-semibold mb-2">Clientes Satisfeitos em Todo Brasil</div>
                  <div className="flex items-center justify-center gap-2 text-sm opacity-90">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                      ))}
                    </div>
                    <span>Aprovado por 98% dos clientes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Video Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Veja a Sabala Dr-909 em Ação
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubra por que esta caixa de som está revolucionando o mercado de áudio portátil
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <video
                className="w-full aspect-video"
                controls
                autoPlay
                muted
                loop
                poster="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=1200&h=675&fit=crop"
              >
                <source src="https://sabala-dr909.shop/assets/video-caixa-4UQo4rz_.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          </div>
        </section>

        {/* Product Gallery Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mais Detalhes do Produto
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore todos os recursos e benefícios da Sabala Dr-909
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            <img 
              src="https://sabala-dr909.shop/assets/desc-1-D7YqDN1g.jpg" 
              alt="Produto Detalhe 1" 
              className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => openModal('image', 'https://sabala-dr909.shop/assets/desc-1-D7YqDN1g.jpg', 'Produto Detalhe 1')}
            />
            <img 
              src="https://sabala-dr909.shop/assets/desc-2-CgAPtZ79.jpg" 
              alt="Produto Detalhe 2" 
              className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => openModal('image', 'https://sabala-dr909.shop/assets/desc-2-CgAPtZ79.jpg', 'Produto Detalhe 2')}
            />
            <img 
              src="https://sabala-dr909.shop/assets/desc-3-ByWgabZ5.jpg" 
              alt="Produto Detalhe 3" 
              className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => openModal('image', 'https://sabala-dr909.shop/assets/desc-3-ByWgabZ5.jpg', 'Produto Detalhe 3')}
            />
            <img 
              src="https://sabala-dr909.shop/assets/desc-4-D_s84ZgG.jpg" 
              alt="Produto Detalhe 4" 
              className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => openModal('image', 'https://sabala-dr909.shop/assets/desc-4-D_s84ZgG.jpg', 'Produto Detalhe 4')}
            />
            <img 
              src="https://sabala-dr909.shop/assets/desc-5-_uQe1ndP.jpg" 
              alt="Produto Detalhe 5" 
              className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => openModal('image', 'https://sabala-dr909.shop/assets/desc-5-_uQe1ndP.jpg', 'Produto Detalhe 5')}
            />
          </div>
        </section>

        {/* Product Features Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              A SABALA Dr-909 é para todas as festas!
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">🎵</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">EXPERIÊNCIA IMERSIVA</h3>
              <p className="text-gray-700">
                Aproveite o som incrível SABALA Original Pro com graves profundos, garantindo uma experiência sonora imersiva e envolvente em qualquer lugar.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">🌈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">ESPETÁCULO DE LUZES</h3>
              <p className="text-gray-700">
                Transforme qualquer ambiente em uma pista de dança com o show de luzes dinâmico, que acompanha o ritmo da sua música, adicionando mais cores na festa.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">🔋</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">ATÉ 6 HORAS DE BATERIA</h3>
              <p className="text-gray-700">
                Com até 6 horas de tempo de reprodução, a SABALA Dr-909 permite que você mantenha a festa em movimento, sem se preocupar com tomadas ou cabos.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">💧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">À PROVA DE ÁGUA</h3>
              <p className="text-gray-700">
                Dance sem preocupações na praia ou à beira da piscina, pois a SABALA Dr-909 é à prova de água IPX6, garantindo durabilidade mesmo em ambientes úmidos.
              </p>
            </div>
          </div>
        </section>

        {/* What's in the Box Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              QUAL O CONTEÚDO DA CAIXA?
            </h2>
            
            <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">1</div>
                  <div className="text-xl font-semibold mb-1">SABALA Dr-909</div>
                  <div className="text-sm opacity-90">Caixa de som premium</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">1</div>
                  <div className="text-xl font-semibold mb-1">Cabo de energia AC</div>
                  <div className="text-sm opacity-90">O plugue AC e a quantidade variam conforme a região</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">1</div>
                  <div className="text-xl font-semibold mb-1">Guia de início rápido</div>
                  <div className="text-sm opacity-90">A SABALA destaca-se com áudio de alta qualidade, tecnologia avançada e design moderno, proporcionando momentos únicos na vida das pessoas.</div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-white border-opacity-30">
                <div className="text-center">
                  <div className="text-lg font-semibold mb-2">Aviso Legal</div>
                  <div className="text-sm opacity-90">
                    • A duração da bateria depende do uso que se dê ao produto.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Sabala Dr-909</h3>
            <p className="text-gray-600 mb-4">
              A caixa de som Bluetooth mais potente do mercado
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <span>✓ Garantia de 1 ano</span>
              <span>✓ Entrega em todo Brasil</span>
              <span>✓ Suporte 24/7</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Floating Buy Button */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
        <a 
          href="https://pagar.0fertastiktok.shop" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-6 rounded-lg shadow-lg transform transition-all hover:scale-105 flex items-center justify-center text-lg"
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          Comprar Agora
        </a>
      </div>

      {/* Modal for Images and Videos */}
      {modalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl max-h-full w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6 text-gray-800" />
            </button>
            
            {modalContent.type === 'image' ? (
              <img
                src={modalContent.src}
                alt={modalContent.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            ) : modalContent.type === 'video' ? (
              <video
                controls
                autoPlay
                className="max-w-full max-h-full rounded-lg"
              >
                <source src={modalContent.src} type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            ) : null}
          </div>
        </div>
      )}
    </div>
  )
}