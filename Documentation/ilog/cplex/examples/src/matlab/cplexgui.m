function varargout = cplexgui(varargin)
% A GUI for CPLEX
% 
%   The starting point for the GUI was code generated by MATLAB's
%   GUIDE command. 
%
%   CPLEXGUI, by itself, creates a new CPLEXGUI or raises the existing
%   singleton*.
%
%   H = CPLEXGUI returns the handle to a new CPLEXGUI or the handle to
%   the existing singleton*.
%
%   CPLEXGUI('CALLBACK',hObject,eventData,handles,...) calls the local
%   function named CALLBACK in CPLEXGUI.M with the given input arguments.
%
%   CPLEXGUI('Property','Value',...) creates a new CPLEXGUI or raises the
%   existing singleton*.  Starting from the left, property value pairs are
%   applied to the GUI before cplexgui_OpeningFcn gets called.  An
%   unrecognized property ctype or invalid value makes property application
%   stop.  All inputs are passed to cplexgui_OpeningFcn via varargin.
%
%   *See GUI Options on GUIDE's Tools menu.  Choose "GUI allows only one
%   instance to run (singleton)".
%
% See also: GUIDE, GUIDATA, GUIHANDLES
%--------------------------------------------------------------------------

% ---------------------------------------------------------------------------
% File: cplexgui.m
% Version 12.6
% ---------------------------------------------------------------------------
% Licensed Materials - Property of IBM
% 5725-A06 5725-A29 5724-Y48 5724-Y49 5724-Y54 5724-Y55 5655-Y21
% Copyright IBM Corporation 2008, 2013. All Rights Reserved.
%
% US Government Users Restricted Rights - Use, duplication or
% disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
% ---------------------------------------------------------------------------

% Begin initialization code - DO NOT EDIT
gui_Singleton = 1;
gui_State = struct('gui_Name',       mfilename, ...
   'gui_Singleton',  gui_Singleton, ...
   'gui_OpeningFcn', @cplexgui_OpeningFcn, ...
   'gui_OutputFcn',  @cplexgui_OutputFcn, ...
   'gui_LayoutFcn',  [] , ...
   'gui_Callback',   []);
if nargin && ischar(varargin{1})
   gui_State.gui_Callback = str2func(varargin{1});
end

if nargout
   [varargout{1:nargout}] = gui_mainfcn(gui_State, varargin{:});
else
   gui_mainfcn(gui_State, varargin{:});
end
% End initialization code - DO NOT EDIT

% --- Executes just before cplexgui is made visible.
function cplexgui_OpeningFcn(hObject, eventdata, handles, varargin)
% This function has no output args, see OutputFcn.
% hObject    handle to figure
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
% varargin   command line arguments to cplexgui (see VARARGIN)

% Choose default command line output for cplexgui
% handles.output = hObject;

% Create a Cplex object
cplex=Cplex();

% Set @guiddisplay to cplex.DisplayFunc in order to display log in GUI
cplex.DisplayFunc =  @guiddisplay;
%   cplex.DisplayFunc =  [];

% Set cplex and filename as handles's member
handles.cplex=cplex;
handles.filename = [];
handles.pset = [];

% Create a Jave JTextArea to store CPLEX LOG
handles.jTextArea = javax.swing.JTextArea;
handles.jTextArea.setEditable(0);

% Add scroll bar into jTextArea
handles.jContainer = javax.swing.JScrollPane(handles.jTextArea);

% Set the position of the jContainer which contain jTextArea
[jcomp, hcontainer] = javacomponent(handles.jContainer, [30,30,800,200]);

% Set hcontainer to resizeable
set(hcontainer,'Units', 'normalized');

% Create a global variable h used in guiddisplay
global h;
h = handles;

% Update param
makeParam(handles.cplex.Param,'Param');
pset = struct2cell(h.pset);
set(handles.paramfields, 'string',pset);

contents = get(handles.paramfields,'String');
name = contents{get(handles.paramfields,'Value')};
name = regexp(name, '\.', 'split');
if length(name) == 1
   Cur = handles.cplex.Param.(name{1}).Cur;
   Min = handles.cplex.Param.(name{1}).Min;
   Max = handles.cplex.Param.(name{1}).Max;
elseif length(name) == 2
   Cur = handles.cplex.Param.(name{1}).(name{2}).Cur;
   Min = handles.cplex.Param.(name{1}).(name{2}).Min;
   Max = handles.cplex.Param.(name{1}).(name{2}).Max;
elseif length(name) == 3
   Cur = handles.cplex.Param.(name{1}).(name{2}).(name{3}).Cur;
   Min = handles.cplex.Param.(name{1}).(name{2}).(name{3}).Min;
   Max = handles.cplex.Param.(name{1}).(name{2}).(name{3}).Max;
elseif length(name) == 4
   Cur = handles.cplex.Param.(name{1}).(name{2}).(name{3}).(name{4}).Cur;
   Min = handles.cplex.Param.(name{1}).(name{2}).(name{3}).(name{4}).Min;
   Max = handles.cplex.Param.(name{1}).(name{2}).(name{3}).(name{4}).Max;
end

if isnumeric(Cur)||isnumeric(Min)||isnumeric(Max)
   Cur = num2str(Cur);
   Min = num2str(Min);
   Max = num2str(Max);
end
set(handles.newvalue,'String',Cur);
set(handles.minvalue,'String',Min);
set(handles.maxvalue,'String',Max);

% Update handles structure
guidata(hObject, handles);

function makeParam(p, context)
global h;
if ~isfield(p, 'Name')
   names = fieldnames(p);
   for i=1:length(names)
      makeParam(p.(names{i}),sprintf('%s.%s',context,names{i}));
   end
else
   context = context(length('Param.')+1:end);
   h.pset.(p.Name) = context;
end

function guiddisplay(m)
% Update cplexgui
drawnow;

% Update log
global h;
h.jTextArea.append([m char(10)]);

% set Scroll to end
h.jTextArea.setCaretPosition(h.jTextArea.getDocument.getLength);

% UIWAIT makes cplexgui wait for user response (see UIRESUME)
% uiwait(handles.figure1);
% --- Outputs from this function are returned to the command line.
function varargout = cplexgui_OutputFcn(hObject, eventdata, handles)
% varargout  cell array for returning output args (see VARARGOUT);
% hObject    handle to figure
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Get default command line output from handles structure
%varargout{1} = handles.output;

% --- Executes on button press in solve.
function solve_Callback(hObject, eventdata, handles)
% hObject    handle to solve (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
try
   handles.cplex.solve();
   global h;
   h.f = [];
   h.x = [];
   h.y = [];
   % Update solution
   updatesol(hObject, eventdata, handles);
   set(handles.solfields, 'string',fieldnames(handles.cplex.Solution));
catch  m
   msgbox(m.message, 'CPLEX ERROR', 'error');
   clear all;
end

% --- Executes on button press in stop.
function stop_Callback(hObject, eventdata, handles)
% hObject    handle to stop (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Terminate solving model
handles.cplex.terminate();

% --- Executes on button press in readModel.
function readModel_Callback(hObject, eventdata, handles)
% hObject    handle to readModel (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
try
   % Open file brower
   [filename, pathname] = ...
      uigetfile({'*.lp';'*.gz';'*.mps';'*.sav'},'Model Selector');
   
   if filename ~= 0
      handles.filename = [pathname filename];
      handles.cplex.readModel(handles.filename);
      guidata(hObject, handles);
   end
catch m
   msgbox(m.message, 'CPLEX ERROR', 'error');
   clear all;
end

% --- Executes on button press in showsol.
function showsol_Callback(hObject, eventdata, handles)
% hObject    handle to showsol (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hint: get(hObject,'Value') returns toggle state of showsol
if get(hObject,'Value')==1
   set(handles.solution,'Visible','on');
else
   set(handles.solution,'Visible','off');
end

function updatesol(hObject, eventdata, handles)
% Update sol
drawnow;

if isfield(handles.cplex.Solution, 'status')
   set(handles.status,'String', num2str(handles.cplex.Solution.status));
end

if isfield(handles.cplex.Solution, 'statusstring')
   set(handles.statusstring,'String',handles.cplex.Solution.statusstring);
end

if isfield(handles.cplex.Solution, 'time')
   set(handles.time, 'String', handles.cplex.Solution.time);
end

if isfield(handles.cplex.Solution, 'dettime')
   set(handles.dettime, 'String', handles.cplex.Solution.dettime);
end

if isfield(handles.cplex.Solution, 'objval')
   set(handles.objval,'String',num2str(handles.cplex.Solution.objval));
end

if isfield(handles.cplex.Solution, 'method')
   set(handles.method, 'String', num2str(handles.cplex.Solution.method));
end
guidata(hObject, handles);

% --- Executes on selection change in solfields.
function solfields_Callback(hObject, eventdata, handles)
% hObject    handle to solfields (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: contents = get(hObject,'String') returns solfields contents as cell array
%        contents{get(hObject,'Value')} returns selected item from solfields
contents = get(hObject,'String');
fieldname = contents{get(hObject,'Value')};
global h;
switch fieldname
   case 'status'
      h.jTextArea.append([fieldname ' = ' num2str(handles.cplex.Solution.status) char(10)]);
   case 'time'
      h.jTextArea.append([fieldname ' = ' num2str(handles.cplex.Solution.time) char(10)]);
   case 'dettime'
      h.jTextArea.append([fieldname ' = ' num2str(handles.cplex.Solution.dettime) char(10)]);
   case 'objval'
      h.jTextArea.append([fieldname ' = ' num2str(handles.cplex.Solution.objval) char(10)]);
   case 'method'
      h.jTextArea.append([fieldname ' = ' num2str(handles.cplex.Solution.method) char(10)]);
   case 'statusstring'
      h.jTextArea.append([fieldname ' = ' handles.cplex.Solution.statusstring char(10)]);
   case 'nodecnt'
      h.jTextArea.append([fieldname ' = ' num2str(handles.cplex.Solution.nodecnt) char(10)]);
   case 'mipitcnt'
      h.jTextArea.append([fieldname ' = ' num2str(handles.cplex.Solution.mipitcnt) char(10)]);
   case 'bestobjval'
      h.jTextArea.append([fieldname ' = ' num2str(handles.cplex.Solution.bestobjval) char(10)]);
   case 'nodeint'
      h.jTextArea.append([fieldname ' = ' num2str(handles.cplex.Solution.nodeint) char(10)]);
   case 'cutoff'
      h.jTextArea.append([fieldname ' = ' num2str(handles.cplex.Solution.cutoff) char(10)]);
   case 'itcnt'
      h.jTextArea.append([fieldname ' = ' num2str(handles.cplex.Solution.itcnt) char(10)]);
   otherwise
      s = ['You need to use guiddisplay callback to get ' fieldname ];
      h.jTextArea.append([num2str(s) char(10)]);
end
h.jTextArea.setCaretPosition(h.jTextArea.getDocument.getLength);

% --- Executes during object creation, after setting all properties.
function solfields_CreateFcn(hObject, eventdata, handles)
% hObject    handle to solfields (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: popupmenu controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
   set(hObject,'BackgroundColor','white');
end


% --- Executes on selection change in paramfields.
function paramfields_Callback(hObject, eventdata, handles)
% hObject    handle to paramfields (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: contents = get(hObject,'String') returns paramfields contents as cell array
%        contents{get(hObject,'Value')} returns selected item from paramfields
contents = get(hObject,'String');
name = contents{get(handles.paramfields,'Value')};
name = regexp(name, '\.', 'split');
if length(name) == 1
   Cur = handles.cplex.Param.(name{1}).Cur;
   len = length(fieldnames(handles.cplex.Param.(name{1})));
   if len == 6
      Min = handles.cplex.Param.(name{1}).Min;
      Max = handles.cplex.Param.(name{1}).Max;
   end
elseif length(name) == 2
   Cur = handles.cplex.Param.(name{1}).(name{2}).Cur;
   len = length(fieldnames(handles.cplex.Param.(name{1}).(name{2})));
   if len == 6
      Min = handles.cplex.Param.(name{1}).(name{2}).Min;
      Max = handles.cplex.Param.(name{1}).(name{2}).Max;
   end
elseif length(name) == 3
   Cur = handles.cplex.Param.(name{1}).(name{2}).(name{3}).Cur;
   len = length(fieldnames(handles.cplex.Param.(name{1}).(name{2}).(name{3})));
   if len == 6
      Min = handles.cplex.Param.(name{1}).(name{2}).(name{3}).Min;
      Max = handles.cplex.Param.(name{1}).(name{2}).(name{3}).Max;
   end
elseif length(name) == 4
   Cur = handles.cplex.Param.(name{1}).(name{2}).(name{3}).(name{4}).Cur;
   len = length(fieldnames(handles.cplex.Param.(name{1}).(name{2}).(name{3}).(name{4})));
   if len == 6
      Min = handles.cplex.Param.(name{1}).(name{2}).(name{3}).(name{4}).Min;
      Max = handles.cplex.Param.(name{1}).(name{2}).(name{3}).(name{4}).Max;
   end
end

if isnumeric(Cur)||isnumeric(Min)||isnumeric(Max)
   Cur = num2str(Cur);
   Min = num2str(Min);
   Max = num2str(Max);
end
set(handles.newvalue,'String',Cur);
set(handles.minvalue,'String',Min);
set(handles.maxvalue,'String',Max);


% --- Executes during object creation, after setting all properties.
function paramfields_CreateFcn(hObject, eventdata, handles)
% hObject    handle to paramfields (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: popupmenu controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
   set(hObject,'BackgroundColor','white');
end



function newvalue_Callback(hObject, eventdata, handles)
% hObject    handle to newvalue (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of newvalue as text
%        str2double(get(hObject,'String')) returns contents of newvalue as a double
value = str2double(get(hObject,'String'));
contents = get(handles.paramfields,'String');
name = contents{get(handles.paramfields,'Value')};

name = regexp(name, '\.', 'split');
if length(name) == 1
   if isa(handles.cplex.Param.(name{1}),'CpxStringParam')
      handles.cplex.Param.(name{1}).Cur = value;
   end
   if isa(handles.cplex.Param.(name{1}),'CpxIntParam')
      handles.cplex.Param.(name{1}).Cur = int32(value);
   end
   if isa(handles.cplex.Param.(name{1}),'CpxBoolParam')
      handles.cplex.Param.(name{1}).Cur = int32(value);
   end
   if isa(handles.cplex.Param.(name{1}),'CpxDoubleParam')
      handles.cplex.Param.(name{1}).Cur = double(value);
   end
elseif length(name) == 2
   if isa(handles.cplex.Param.(name{1}).(name{2}),'CpxStringParam')
      handles.cplex.Param.(name{1}).(name{2}).Cur = value;
   end
   if isa(handles.cplex.Param.(name{1}).(name{2}),'CpxIntParam')
      handles.cplex.Param.(name{1}).(name{2}).Cur = int32(value);
   end
   if isa(handles.cplex.Param.(name{1}).(name{2}),'CpxBoolParam')
      handles.cplex.Param.(name{1}).(name{2}).Cur = int32(value);
   end
   if isa(handles.cplex.Param.(name{1}).(name{2}),'CpxDoubleParam')
      handles.cplex.Param.(name{1}).(name{2}).Cur = double(value);
   end
   
elseif length(name) == 3
   if isa(handles.cplex.Param.(name{1}).(name{2}).(name{3}),'CpxStringParam')
      handles.cplex.Param.(name{1}).(name{2}).(name{3}).Cur = value;
   end
   if isa(handles.cplex.Param.(name{1}).(name{2}).(name{3}),'CpxIntParam')
      handles.cplex.Param.(name{1}).(name{2}).(name{3}).Cur = int32(value);
   end
   if isa(handles.cplex.Param.(name{1}).(name{2}).(name{3}),'CpxBoolParam')
      handles.cplex.Param.(name{1}).(name{2}).(name{3}).Cur = int32(value);
   end
   if isa(handles.cplex.Param.(name{1}).(name{2}).(name{3}),'CpxDoubleParam')
      handles.cplex.Param.(name{1}).(name{2}).(name{3}).Cur = double(value);
   end
   
elseif length(name) == 4
   if isa(handles.cplex.Param.(name{1}).(name{2}).(name{3}).(name{4}),'CpxStringParam')
      handles.cplex.Param.(name{1}).(name{2}).(name{3}).(name{4}).Cur = value;
   end
   if isa(handles.cplex.Param.(name{1}).(name{2}).(name{3}).(name{4}),'CpxIntParam')
      handles.cplex.Param.(name{1}).(name{2}).(name{3}).(name{4}).Cur = int32(value);
   end
   if isa(handles.cplex.Param.(name{1}).(name{2}).(name{3}).(name{4}),'CpxBoolParam')
      handles.cplex.Param.(name{1}).(name{2}).(name{3}).(name{4}).Cur = int32(value);
   end
   if isa(handles.cplex.Param.(name{1}).(name{2}).(name{3}).(name{4}),'CpxDoubleParam')
      handles.cplex.Param.(name{1}).(name{2}).(name{3}).(name{4}).Cur = double(value);
   end
   
end


% --- Executes during object creation, after setting all properties.
function newvalue_CreateFcn(hObject, eventdata, handles)
% hObject    handle to newvalue (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
   set(hObject,'BackgroundColor','white');
end

% --- Executes on button press in clearlog.
function clearlog_Callback(hObject, eventdata, handles)
% hObject    handle to clearlog (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
global h;
h.jTextArea.setText('');  % char(10) only on lines>1...

% --- Executes on button press in close.
function close_Callback(hObject, eventdata, handles)
% hObject    handle to close (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
clear all;
close all;


% --- Executes on button press in tune.
function tune_Callback(hObject, eventdata, handles)
% hObject    handle to tune (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
tunestat = handles.cplex.tuneParam();
set(handles.status,'String', num2str(tunestat));
guidata(hObject, handles);
