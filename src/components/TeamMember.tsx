interface TeamMemberProps {
	image: string;
	name: string;
}

export default function TeamMember({ image, name }: TeamMemberProps) {
	return (
		<img
			src={image}
			alt={name}
			className="absolute inset-0 w-full h-full object-cover"
		/>
	);
}
