import Country from './country';
import Type from './type';
import Adults from './adults';
import Children from './children';

export default function Filters({ options }) {
    return (
        <div className="bg-white shadow-lg rounded-lg px-6 py-4 border-gray-100 flex space-x-3">
            <Country />
            <Type />
            <Adults />
            <Children />
        </div>
    )
}
