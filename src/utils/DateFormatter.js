import { format } from "date-fns";
export const timeSince = (dateString) => {
    var date = new Date(dateString);

    var formattedDate = format(date, "MMM do, yyyy ");

    // console.log(formattedDate);
    return formattedDate;
};