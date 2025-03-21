interface SpecialistCardProps {
  id: number;
  name: string;
  title: string;
  specialties: string;
  experience: string;
  imageUrl: string;
}

const SpecialistCard = ({ id, name, title, specialties, experience, imageUrl }: SpecialistCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-w-3 aspect-h-2">
        <img 
          src={imageUrl} 
          alt={name}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{title}</p>
        <div className="space-y-2">
          <p className="text-sm text-gray-500">
            <span className="font-medium">Especialidad:</span> {specialties}
          </p>
          <p className="text-sm text-gray-500">
            <span className="font-medium">Experiencia:</span> {experience}
          </p>
        </div>
        <button className="mt-4 w-full bg-[#2A6877] text-white px-4 py-2 rounded-md hover:bg-[#235A67] transition-colors">
          Agendar Consulta
        </button>
      </div>
    </div>
  );
};

export default SpecialistCard;