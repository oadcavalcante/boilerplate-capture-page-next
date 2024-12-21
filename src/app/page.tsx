import FormCapture from "@/components/FormCapture";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-800 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Cadastre-se e Receba Novidades!</h1>
        <p className="text-gray-600 text-center mb-6">Insira seu nome e e-mail para ficar por dentro das novidades.</p>
        <FormCapture />
      </div>
    </div>
  );
}
