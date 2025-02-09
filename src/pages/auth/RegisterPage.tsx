import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ErrorMessage } from '../../components/ui/ErrorMessage';
import logoFull from '../../assets/images/logo-murcas.png';

export function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    matricule: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Validation du matricule
    if (!formData.matricule) {
      newErrors.matricule = 'Le matricule est requis';
    } else if (!/^MF\d{6}$/.test(formData.matricule)) {
      newErrors.matricule = 'Format invalide (ex: MF123456)';
    }

    // Validation de l'email
    if (!formData.email) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
    }

    // Validation du téléphone
    if (!formData.phone) {
      newErrors.phone = 'Le numéro de téléphone est requis';
    } else if (!/^\+237[67]\d{8}$/.test(formData.phone)) {
      newErrors.phone = 'Format invalide (ex: +237612345678)';
    }

    // Validation du mot de passe
    if (!formData.password) {
      newErrors.password = 'Le mot de passe est requis';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Le mot de passe doit contenir au moins 8 caractères';
    }

    // Validation de la confirmation du mot de passe
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Appel API pour l'inscription
        console.log('Form submitted:', formData);
      } catch (error) {
        setErrors({
          submit: 'Une erreur est survenue lors de l\'inscription'
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
    // Effacer l'erreur lors de la modification
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
            <h2 className="text-3xl font-bold text-gray-900">Créer un compte</h2>
            <p className="text-gray-600 mt-2">
              Accédez à votre espace membre MURCAS FASAS
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Votre matricule
              </label>
              <input
                type="text"
                name="matricule"
                value={formData.matricule}
                onChange={handleChange}
                placeholder="Ex: MF123456"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.matricule ? 'border-red-500' : 'border-gray-300'
                } focus:ring-2 focus:ring-[#003DA5] focus:border-transparent transition-all`}
              />
              {errors.matricule && <ErrorMessage message={errors.matricule} />}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Votre adresse mail
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="exemple@email.com"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } focus:ring-2 focus:ring-[#003DA5] focus:border-transparent transition-all`}
              />
              {errors.email && <ErrorMessage message={errors.email} />}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Votre numéro de téléphone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+237 6XXXXXXXX"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                } focus:ring-2 focus:ring-[#003DA5] focus:border-transparent transition-all`}
              />
              {errors.phone && <ErrorMessage message={errors.phone} />}
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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirmer votre mot de passe
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-[#003DA5] focus:border-transparent transition-all`}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.confirmPassword && <ErrorMessage message={errors.confirmPassword} />}
            </div>

            <button
              type="submit"
              className="w-full bg-[#003DA5] text-white py-3 rounded-lg hover:bg-[#002D7A] transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
            >
              Créer mon compte
            </button>

            {errors.submit && (
              <div className="p-4 bg-red-50 rounded-lg">
                <ErrorMessage message={errors.submit} />
              </div>
            )}
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Déjà membre ?{' '}
              <Link to="/login" className="text-[#003DA5] hover:text-[#002D7A] font-medium">
                Connectez-vous
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Cercles décoratifs */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-[#003DA5]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-[#8FC03C]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
    </div>
  );
}
