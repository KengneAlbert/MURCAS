import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ErrorMessage } from '../../components/ui/ErrorMessage';
import logoFull from '../../assets/images/logo-murcas.png';

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.username) {
      newErrors.username = 'L\'identifiant est requis';
    }

    if (!formData.password) {
      newErrors.password = 'Le mot de passe est requis';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Appel API pour la connexion
        console.log('Login attempt:', formData);
      } catch (error) {
        setErrors({
          submit: 'Identifiant ou mot de passe incorrect'
        });
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <img 
            src={logoFull} 
            alt="MURCAS FASAS" 
            className="h-20 mx-auto mb-6 transform hover:scale-105 transition-transform duration-300"
          />
          <div className="h-1 w-24 bg-gradient-to-r from-[#003DA5] to-[#8FC03C] mx-auto rounded-full mb-8"></div>
        </div>

        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Connexion</h2>
            <p className="text-gray-600 mt-2">
              Accédez à votre espace membre MURCAS FASAS
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Utilisateur
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Matricule ou email"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.username ? 'border-red-500' : 'border-gray-300'
                } focus:ring-2 focus:ring-[#003DA5] focus:border-transparent transition-all`}
              />
              {errors.username && <ErrorMessage message={errors.username} />}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-[#003DA5] focus:border-transparent transition-all`}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && <ErrorMessage message={errors.password} />}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-[#003DA5] focus:ring-[#003DA5] border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                  Se souvenir de moi
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="text-sm text-[#003DA5] hover:text-[#002D7A]"
              >
                Mot de passe oublié ?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-[#003DA5] text-white py-3 rounded-lg hover:bg-[#002D7A] transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
            >
              Se connecter
            </button>

            {errors.submit && (
              <div className="p-4 bg-red-50 rounded-lg">
                <ErrorMessage message={errors.submit} />
              </div>
            )}
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Pas encore membre ?{' '}
              <Link to="/register" className="text-[#003DA5] hover:text-[#002D7A] font-medium">
                Créer un compte
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
